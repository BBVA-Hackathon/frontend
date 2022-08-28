import styled from 'styled-components';

export const Main = styled.div`
  padding: 40px 80px;
`;

export const Title = styled.h1`
  font-size: 45px;
  font-weight: bold;
  color: #333;
  margin-bottom: 40px;
`;

export const CardContainer = styled.div`
  margin-top: 70px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: 320px 320px 320px;
  grid-template-rows: auto;
  justify-content: space-between;
  grid-gap: 40px;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderFilter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderMethodShow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OptionShow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  p {
    margin-left: 10px;
  }
`;
