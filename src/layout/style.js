import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
`;
