import { useEffect, useState } from 'react';
import { listAll } from '../../services/BankService';
import { GridContainer } from './style';
import Card from '../../components/card';
import Modal from '../../components/modal';

const ListGrid = () => {
  const [banks, setBanks] = useState([]);
  const [bankSelect, setBankSelect] = useState('');
  const [modal, setModal] = useState(false);


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
            _id={_id}
            name={name}
            image={image}
            setBankSelect={() => setBankSelect(_id)}
            onShow={() => showModal()}
          />
        ))}
      </GridContainer>
      <Modal visible={modal} close={() => closeModal()} _id={bankSelect} />
    </>
  );
};

export default ListGrid;
