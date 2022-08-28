import { CardContainer, NameBank, StatusContent } from './style';

const Card = ({ name, image, onShow, setBankSelect }) => {
  const handleClick = () => {
    setBankSelect();
    onShow();
  };

  return (
    <CardContainer imgUrl={image} onClick={handleClick}>
      <StatusContent></StatusContent>
      <NameBank>{name}</NameBank>
    </CardContainer>
  );
};

export default Card;
