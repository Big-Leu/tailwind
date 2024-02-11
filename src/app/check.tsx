import React, { useState } from 'react';

const CheckboxExample: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={handleCheckboxChange} 
      />
      <label>Stay signed in</label>
    </div>
  );
};

export default CheckboxExample;