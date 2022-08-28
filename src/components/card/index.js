import { CardContainer, NameBank, StatusContent } from './style';
import { useEffect, useState } from 'react';
import socket from '../../utils/socket.js';
import { listById } from '../../services/BankService';

const Card = ({ name, image, onShow, setBankSelect, _id }) => {
  const [idBank, setIdBank] = useState('');
  const [bank, setBank] = useState({});

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

  console.log('card', capacity);

  const handleClick = () => {
    setBankSelect();
    onShow();
  };

  useEffect(() => {
    setIdBank(_id);
    console.log('carSocket', idBank);
    if (idBank !== '') {
      console.log('init if');
      socket.on(`input ${idBank}`, (data) => {
        console.log('socket');
        console.log(data);
        setCapacity(data);
      });
    }
  });

  useEffect(() => {
    setIdBank(idBank);
    if (idBank !== '') {
      listById(idBank)
        .then((response) => {
          setBank(response.data);
          console.log('list by id', response.data);
        })
        .catch(() => {});
    }
  }, [idBank]);

  return (
    <CardContainer imgUrl={image} onClick={handleClick}>
      <StatusContent percent={capacity.capacityInt / bank.capacity}>
        {capacity.capacityInt}/ {bank.capacity}
      </StatusContent>
      <NameBank>{name}</NameBank>
    </CardContainer>
  );
};

export default Card;
