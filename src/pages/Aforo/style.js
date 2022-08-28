import styled from 'styled-components';

export const Main = styled.div`
  padding: 40px 80px;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 45px;
  font-weight: bold;
  color: #333;
  margin-bottom: 40px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    display: block;
  }
`;

export const HeaderFilter = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    display: block;
  }
`;

export const HeaderMethodShow = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 800px) {
    margin-top: 50px;
    justify-content: center;
  }
`;

export const OptionShow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  p {
    margin-left: 10px;

    @media (max-width: 800px) {
      font-size: 20px;
    }
  }
`;
