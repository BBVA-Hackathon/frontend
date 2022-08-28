import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 320px;
  height: 270px;
  background: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-position: center;
  position: relative;
  ::after {
    content: '';
    width: 320px;
    height: 270px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.55);
  }
  @media (max-width: 780px) {
    width: 380px;
    height: 300px;
    ::after {
      content: '';
      width: 380px;
      height: 300px;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.55);
    }
  }
`;

export const StatusContent = styled.div`
  z-index: 999;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #fff;
  background-color: ${(props) =>
    props.percent > 0.2
      ? '#D42333'
      : props.percent > 0.4
      ? '#00c853'
      : props.percent > 0.8
      ? 'white'
      : 'white'};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameBank = styled.p`
  z-index: 999;
  color: white;
  width: 100%;
  position: absolute;
  top: 70%;
  text-align: center;
`;
