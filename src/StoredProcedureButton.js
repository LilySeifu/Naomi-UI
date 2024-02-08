// src/StoredProcedureButton.js
import React from 'react';

const StoredProcedureButton = () => {
  const runStoredProcedure = async () => {
    try {
      await fetch('http://localhost:3001/api/run-stored-procedure'); // Replace with your API URL
      console.log('Stored procedure (job) executed successfully.');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={runStoredProcedure}>Run Stored Procedure (Job)</button>
    </div>
  );
};

export default StoredProcedureButton;
