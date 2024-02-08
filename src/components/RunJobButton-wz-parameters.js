// src/components/RunJobButton.js
import React from 'react';

// import axios from 'axios';
import http from "../http-common";
import ModernButton from './ModernButton';
import ParameterForm from './ParameterForm';

const RunJobButton = () => {
 
  const handleRunJob = async (params) => {
    try {
      // Make an API request to run the stored procedure (job)
      const response = await http.get('/run-stored-procedure');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
    console.log('Executing stored procedure with parameters:', params);
  };

  return (
    <div>
    <ParameterForm onSubmit={handleRunJob}/>
        
    </div>
  );
};

export default RunJobButton;
