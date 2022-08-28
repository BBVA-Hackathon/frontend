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

const Select = ({ label }) => {
  const [selected, setSelected] = useState('Lima');
  const [options, setOptions] = useState([
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
    'Option 8',
    'Option 9',
    'Option 10',
  ]);
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
            <SelectOption key={index}>
              <p>{option}</p>
            </SelectOption>
          ))}
        </SelectOptions>
      )}
    </SelectContainer>
  );
};

export default Select;
