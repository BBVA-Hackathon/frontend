import styled from 'styled-components';

export const GridContainer = styled.div`
  margin-top: 70px;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  grid-template-columns: 320px 320px 320px 320px;
  grid-template-rows: auto;
  justify-content: space-between;
  grid-gap: 40px;
  box-sizing: border-box;
  @media (max-width: 1500px) {
    grid-template-columns: 320px 320px 320px;
    grid-template-rows: auto;
    grid-gap: 40px;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 320px 320px;
    grid-template-rows: auto;
    grid-gap: 40px;
  }
  @media (max-width: 780px) {
    grid-template-columns: 380px;
    grid-template-rows: auto;
    grid-gap: 40px;
    justify-content: center;
  }
`;
