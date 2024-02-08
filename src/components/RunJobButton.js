// src/components/RunJobButton.js
import React from 'react';
// import axios from 'axios';
import http from "../http-common";
import ModernButton from './ModernButton';

const RunJobButton = () => {
 
  const handleRunJob = async () => {
    try {
      // Make an API request to run the stored procedure (job)
      const response = await http.get('/run-stored-procedure');
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    
      <ModernButton onClick={handleRunJob} style={{justifyContent: "center"}}>
        Execute Stored Procedure
      </ModernButton>
    </div>
  );
};

export default RunJobButton;
