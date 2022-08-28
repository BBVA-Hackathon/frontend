import styled from 'styled-components';

export const MapContainer = styled.div`
  margin-top: 70px;
  display: flex;
`;

export const ListMapContainer = styled.div`
  width: 340px;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  height: 700px;
`;

export const ItemListStyle = styled.div`
  margin-left: 0px;
  cursor: pointer;
  border-bottom: 1px solid #333;
  padding-bottom: 25px;
  margin-bottom: 40px;
`;

export const NameBank = styled.h3`
  font-size: 25px;
  font-weight: bold;
  color: #222222;
  margin-bottom: 10px;
`;

export const DirectionBank = styled.p`
  font-size: 14px;
  color: #666666;
  margin-bottom: 5px;
`;

export const DetailBank = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const StatusBank = styled.p`
  margin-right: 4px;
  color: ${(props) => (props.hour > 9 ? '#00a65a' : '#f56954')};
`;

export const ScheduleBank = styled.p`
  margin-left: 4px;
  color: #444444;
`;
