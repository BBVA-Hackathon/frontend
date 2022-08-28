import { useEffect, useState } from 'react';
import { listAll } from '../../services/BankService';

import {
  MapContainer,
  ListMapContainer,
  ItemListStyle,
  NameBank,
  DirectionBank,
  DetailBank,
  StatusBank,
  ScheduleBank,
  Map,
} from './style';
import map from '../../assets/images/Mapa.png';

const ListMap = () => {
  const [banks, setBanks] = useState([]);
  useEffect(() => {
    listAll().then((response) => {
      console.log(response.data);
      setBanks(response.data);
    });
  }, []);

  return (
    <MapContainer>
      <ListMapContainer>
        {banks?.map(({ _id, name, address }) => (
          <ItemListMap key={_id} name={name} address={address} />
        ))}
      </ListMapContainer>
      <Map>
        <img src={map} alt='M' />
      </Map>
    </MapContainer>
  );
};

const ItemListMap = ({ name, address }) => {
  return (
    <ItemListStyle>
      <NameBank>{name?.split('_').join(' ')}</NameBank>
      <DirectionBank>{address}</DirectionBank>
      <DetailBank>
        <StatusBank hour={2}>Cerrado</StatusBank>
        <ScheduleBank> Abre a las 09:00 del lunes a viernes</ScheduleBank>
      </DetailBank>
    </ItemListStyle>
  );
};

export default ListMap;
