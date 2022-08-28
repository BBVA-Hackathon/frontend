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

const Modal = ({ children, close, title, visible, modal }) => {
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
    if (idBank !== '') {
      socket.on(`input ${idBank}`, (data) => {
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
                  <p>Plataforma</p>
                </div>
                <div>
                  <p>Ventanilla</p>
                </div>
              </div>
              <div>
                <div>
                  <p>Plataforma preferencial</p>
                </div>
                <div>
                  <p>Ventanilla preferencial</p>
                </div>
              </div>
            </ContainerDetailInternal>
            <ContainerDetails>
              <CashierDetail>Cajero</CashierDetail>
            </ContainerDetails>
            <ContainerDetails>
              <p>Exterior</p>
            </ContainerDetails>
            <ContainerDetailExterno>
              <div>
                <p>plataforma/ventanilla</p>
              </div>
              <div>
                <p>cajero</p>
              </div>
            </ContainerDetailExterno>
          </ModalBody>
          <ModalFooter>
            <p>Actualizacion</p>
          </ModalFooter>
        </ModalContainer>
      </Shadow>
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;
