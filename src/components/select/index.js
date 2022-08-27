import { useState } from 'react';
import { SelectContainer } from './style';

const Select = () => {
  const [selected, setSelected] = useState(false);
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
      <h1 onClick={() => setShowList(!showList)}>Select</h1>
      {showList && (
        <div>
          {options.map((option, index) => (
            <div key={index}>{option}</div>
          ))}
        </div>
      )}
    </SelectContainer>
  );
};

export default Select;
