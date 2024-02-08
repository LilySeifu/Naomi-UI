// ParameterForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import ModernButton from './ModernButton';

const FormContainer = styled.div`
  max-width: 300px;
  margin: 20px auto;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;

const ParameterForm = ({ onSubmit }) => {
  const [param1, setParam1] = useState('');
  const [param2, setParam2] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit({ param1, param2 });
  };

  return (
    <FormContainer>
      <form onSubmit={handleFormSubmit}>
        <StyledInput
          type="text"
          placeholder="Parameter 1"
          value={param1}
          onChange={(e) => setParam1(e.target.value)}
        />
        <StyledInput
          type="text"
          placeholder="Parameter 2"
          value={param2}
          onChange={(e) => setParam2(e.target.value)}
        />
        <ModernButton type="submit">Execute Stored Procedure</ModernButton>
      </form>
    </FormContainer>
  );
};

export default ParameterForm;
