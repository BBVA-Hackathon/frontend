import {
  MapContainer,
  ListMapContainer,
  ItemListStyle,
  NameBank,
  DirectionBank,
  DetailBank,
  StatusBank,
  ScheduleBank,
} from './style';

const ListMap = () => {
  return (
    <MapContainer>
      <ListMapContainer>
        <ItemListMap />
        <ItemListMap />
      </ListMapContainer>
      <div> map</div>
    </MapContainer>
  );
};

const ItemListMap = () => {
  return (
    <ItemListStyle>
      <NameBank>BBVA San Isidro</NameBank>
      <DirectionBank>
        Av. República de Panamá 3055, San Isidro 15036
      </DirectionBank>
      <DetailBank>
        <StatusBank hour={2}>Cerrado</StatusBank>
        <ScheduleBank> Abre a las 09:00 del lunes a viernes</ScheduleBank>
      </DetailBank>
    </ItemListStyle>
  );
};

export default ListMap;
