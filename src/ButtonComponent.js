import React from 'react';
import axios from 'axios';

const ButtonComponent = () => {
  const handleButtonClick = async () => {
    try {
      const response = await axios.post('/api/execute-database-procedure');
      console.log('Procedure executed:', response.data);
    } catch (error) {
      console.error('Error executing procedure:', error);
    }
  };

  return (
    <button onClick={handleButtonClick}>
      Execute Database Procedure
    </button>
  );
};

export default ButtonComponent;
