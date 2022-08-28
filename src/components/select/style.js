import styled from 'styled-components';

export const SelectContainer = styled.div`
  width: 250px;
  background-color: #f4f4f4;
  position: relative;
  z-index: 1;
  margin-right: 20px;
`;

export const Label = styled.p`
  font-size: 11px;
  color: #999;
  margin-bottom: 5px;
`;

export const SelectHeader = styled.div`
  cursor: pointer;
  * {
    cursor: pointer;
  }
  display: flex;
  justify-content: space-between;
  padding: 8px 10px;
  border-bottom: 1px solid #333;
`;

export const SelectOptions = styled.div`
  z-index: 10;
  position: absolute;
  width: 100%;
  background-color: #999;
  color: #fff;
`;

export const SelectOption = styled.div`
  padding: 8px 10px;
`;
