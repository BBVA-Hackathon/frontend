import {
  Main,
  Title,
  Header,
  HeaderFilter,
  HeaderMethodShow,
  OptionShow,
} from './style';
import Select from '../../components/select';
import { Outlet } from 'react-router-dom';
import gridOn from '../../assets/images/gridOn.svg';
import mapOff from '../../assets/images/mapOff.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Aforo = () => {
  const navigate = useNavigate();
  const [city, setCity] = useState(['Lima']);
  const [district, setDistrict] = useState(['San Isidro']);

  const handleClick = (path) => {
    navigate(`/${path}`);
  };


  
  return (
    <Main>
      <Title>Puntos de atención</Title>
      <Header>
        <HeaderFilter>
          <Select label={'Departamento'} options={city} />
          <Select label={'Provincia'} options={city} />
          <Select label={'Distrito'} options={district} />
        </HeaderFilter>
        <HeaderMethodShow>
          <OptionShow onClick={() => handleClick('list')}>
            <img src={gridOn} height='23' alt='grid' />
            <p>Lista</p>
          </OptionShow>

          <OptionShow onClick={() => handleClick('map')}>
            <img src={mapOff} height='23' alt='mapOff' />
            <p>Mapa</p>
          </OptionShow>
        </HeaderMethodShow>
      </Header>
      <Outlet />
    </Main>
  );
};

export default Aforo;
