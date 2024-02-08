// ModernButton.js
import React from 'react';
import styled from 'styled-components';
import CenteredButton from './CenteredButton';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust this to your needs */
`;

const Container = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 2px; /* Adjust spacing as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const StyledButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  font-size: 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #45a049;
  }
  
  
`;

const ModernButton = ({ onClick, children }) => {
  return (
    <>
    <Container>
    {/*<div style={{fontSize: '30px'}}>Stored Procedure</div>*/}
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
    </Container>
    </>
  );
};

export default ModernButton;
