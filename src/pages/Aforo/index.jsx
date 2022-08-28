import {
  Main,
  Title,
  Header,
  HeaderFilter,
  HeaderMethodShow,
  CardContainer,
  OptionShow,
} from './style';
import Select from '../../components/select';
import Card from '../../components/card';
import gridOn from '../../assets/images/gridOn.svg';

import mapOff from '../../assets/images/mapOff.svg';

const Aforo = () => {
  return (
    <Main>
      <Title>Puntos de atención</Title>
      <Header>
        <HeaderFilter>
          <Select label={'Ciudad'} />
          <Select label={'Distrito'} />
        </HeaderFilter>
        <HeaderMethodShow>
          <OptionShow>
            <img src={gridOn} height='23' alt='grid' />
            <p>Lista</p>
          </OptionShow>
          <OptionShow>
            <img src={mapOff} height='23' alt='mapOff' />
            <p>Mapa</p>
          </OptionShow>
        </HeaderMethodShow>
      </Header>

      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </Main>
  );
};

export default Aforo;
