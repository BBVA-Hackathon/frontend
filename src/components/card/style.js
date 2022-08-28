import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 320px;
  height: 270px;
  background: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-position: center;
  ::after {
    content: '';
    width: 320px;
    height: 270px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
