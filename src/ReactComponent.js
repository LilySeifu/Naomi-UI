import React, { useState } from 'react';

const ReactComponent = () => {
  const [response, setResponse] = useState('');

  const runStoredProcedure = async () => {
    try {
      const res = await fetch('/run-stored-procedure');
      const data = await res.json();
      setResponse(JSON.stringify(data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={runStoredProcedure}>Run Stored Procedure</button>
      <div>
        <pre>{response}</pre>
      </div>
    </div>
  );
};

export default ReactComponent;