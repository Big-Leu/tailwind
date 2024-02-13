import React, { useState } from 'react';

const CheckboxExample: React.FC = () => {

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