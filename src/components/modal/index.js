import { useState, useEffect } from 'react';
import {
  Shadow,
  ModalContainer,
  ModalHeader,
  DirectionBank,
  ModalBody,
  CurrentCapacity,
  ContainerDetails,
  ModalFooter,
  ContainerDetailInternal,
  CashierDetail,
  ContainerDetailExterno,
  Close,
} from './style';
import { listById } from '../../services/BankService';
import socket from '../../utils/socket.js';
import ReactDOM from 'react-dom';

const Modal = ({ children, close, _id, visible, modal }) => {
  const [name, setName] = useState('');
  const [idBank, setIdBank] = useState('');

  const [capacity, setCapacity] = useState({
    capacityNormalWindow: 0,
    capacityNormalPlatform: 0,
    capacityPrefWindow: 0,
    capacityPrefPlatform: 0,
    capacitySensorInt: 0,
    capacityInt: 0,
    capacityAtm: 0,
    capacityTranQueue: 0,
    capacityAtmQueue: 0,
  });

  useEffect(() => {
    setIdBank(_id);
    console.log('useEffl', idBank);
    if (idBank !== '') {
      console.log('init if');
      socket.on(`input ${idBank}`, (data) => {
        console.log('socket');
        console.log(data);
        setCapacity(data);
      });
    }
  });

  const listByIdFromApi = async (idBank) => {
    if (idBank === '') return;
    listById(idBank).then(
      (data) => {
        if (data && data.data) {
          setName(data.data.name);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleChange = (event) => {
    const idBank = event.target.value;
    setIdBank(idBank);
  };

  const handleSubmit = () => {
    listByIdFromApi(idBank);
  };

  let image =
    'http://www.dimetutraba.pe/wp-content/uploads/2020/09/BBVA-Continental-1024x667.jpg';

  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <Shadow>
        <ModalContainer imgUrl={image}>
          <Close onClick={close}>
            <p onClick={close}>x</p>
          </Close>
          <ModalHeader>
            <DirectionBank>
              Av. República de Panamá 3055, San Isidro 15036 Peru
            </DirectionBank>
          </ModalHeader>

          <ModalBody>
            <ContainerDetails>
              <CurrentCapacity>AFORO ACTUAL: 15/20</CurrentCapacity>
            </ContainerDetails>

            <ContainerDetails>
              <p>Interior</p>
            </ContainerDetails>
            <ContainerDetailInternal>
              <div>
                <div>
                  <p>Plataforma: {capacity.capacityNormalPlatform}</p>
                </div>
                <div>
                  <p>Ventanilla: {capacity.capacityNormalWindow}</p>
                </div>
              </div>
              <div>
                <div>
                  <p>
                    Plataforma Preferencial: {capacity.capacityPrefPlatform}
                  </p>
                </div>
                <div>
                  <p>Ventanilla Preferencial: {capacity.capacityPrefWindow}</p>
                </div>
              </div>
            </ContainerDetailInternal>
            <ContainerDetails>
              <CashierDetail>
                Esperando Cajero: {capacity.capacityAtm}{' '}
              </CashierDetail>
            </ContainerDetails>
            <ContainerDetails>
              <p>Exterior</p>
            </ContainerDetails>
            <ContainerDetailExterno>
              <div>
                <p>Cola de cajero: {capacity.capacityAtmQueue}</p>
              </div>
              <div>
                <p>Cola del banco: {capacity.capacityTranQueue}</p>
              </div>
            </ContainerDetailExterno>
          </ModalBody>
          <ModalFooter>
            <p>*Estos datos se actualizarón hace 1 segundo</p>
          </ModalFooter>
        </ModalContainer>
      </Shadow>
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;
