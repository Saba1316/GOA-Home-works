import { useState } from 'react';

const useToggle = (initialValue = '') => {
  const [color, setColor] = useState(initialValue);

  const changeColor = (value) => {
    setColor(value);
  };

  return {
    color,
    changeColor,
  };
};

export default useToggle;
