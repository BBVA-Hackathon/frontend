import { useEffect, useState } from 'react';
import { listAll } from '../../services/BankService';
import { GridContainer } from './style';
import Card from '../../components/card';
import Modal from '../../components/modal';

const ListGrid = () => {
  const [banks, setBanks] = useState([]);
  const [bankSelect, setBankSelect] = useState();
  const [modal, setModal] = useState(false);

  console.log('Banco seleecionado', bankSelect);
  
  useEffect(() => {
    listAll().then((response) => {
      console.log(response.data);
      setBanks(response.data);
    });
  }, []);

  const closeModal = () => {
    setModal(false);
  };

  const showModal = () => {
    setModal(true);
  };

  return (
    <>
      <GridContainer>
        {banks?.map(({ _id, name, image }) => (
          <Card
            key={_id}
            name={name}
            image={image}
            setbank={setBankSelect}
            onShow={() => showModal()}
          />
        ))}
      </GridContainer>
      <Modal visible={modal} close={() => closeModal()} />
    </>
  );
};

export default ListGrid;
