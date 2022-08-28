import styled from 'styled-components';

export const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.55);
  z-index: 9999;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 700px;
  height: 550px;
  z-index: 2;
  background: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  background-position: center;
  position: relative;
  ::after {
    content: '';
    width: 700px;
    height: 550px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.55);
  }
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  padding: 20px;
  z-index: 999999;
  text-align: center;
  border-bottom: 3px dashed white;
`;
export const DirectionBank = styled.h2`
  font-size: 20px;
  color: #f2f2f2;
`;

export const ModalBody = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  z-index: 999999;
`;

export const ModalFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px;
  z-index: 999999;
  text-align: center;
  color: white;
`;

export const ContainerDetails = styled.div`
  margin-bottom: 5px;
  text-align: center;
  border-bottom: 3px dashed white;
  padding-bottom: 10px;
  p {
    color: white;
  }
  div {
  }
`;

export const ContainerDetailInternal = styled.div`
  display: flex;
  height: 130px;
  border-bottom: 3px dashed white;
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  p {
    color: white;
  }
`;

export const ContainerDetailExterno = styled.div`
  display: flex;
  height: 80px;
  border-bottom: 3px dashed white;
  div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
  }

  p {
    color: white;
  }
`;

export const CurrentCapacity = styled.p`
  font-size: 30px;
  color: white;
`;

export const CashierDetail = styled.p`
  color: white;
  padding: 20px 0;
`;

export const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  z-index: 999999999;
  background-color: white;
  border-radius: 5px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    font-size: 20px;
    color: #333;
  }
`;
