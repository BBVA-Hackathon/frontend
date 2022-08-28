import { useState } from 'react';
import {
  Label,
  SelectContainer,
  SelectHeader,
  SelectOptions,
  SelectOption,
} from './style';
import angleUp from '../../assets/images/angleUp.svg';
import angleDown from '../../assets/images/angleDown.svg';

const Select = ({ label, options }) => {
  const [selected, setSelected] = useState('Seleccione');

  const [showList, setShowList] = useState(false);

  return (
    <SelectContainer>
      <SelectHeader onClick={() => setShowList(!showList)}>
        <div>
          <Label>{label}</Label>
          <p>{selected}</p>
        </div>
        <img src={showList ? angleUp : angleDown} alt='angle-up' />
      </SelectHeader>

      {showList && (
        <SelectOptions>
          {options.map((option, index) => (
            <SelectOption
              key={index}
              onClick={() => {
                setSelected(option);
                setShowList(!showList);
              }}
            >
              <p>{option}</p>
            </SelectOption>
          ))}
        </SelectOptions>
      )}
    </SelectContainer>
  );
};

export default Select;
