import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

// Define the styled login button
const StyledLoginButton = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 40px 60px;
  font-size: 24px;
  font-color: white;
  // font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const Landing = () => {
  return (
    <>
    
      {/* <header style={{ textAlign: "center" }}>
        <h1>Welcome to LMA</h1>
      </header> */}
      <main style={{ display: "flex", justifyContent: "center", gap: "2rem" }}>
        {/* <Link
          to="/signup"
          style={{
            textDecoration: "none",
            border: "1px solid gray",
            padding: "0.5rem 1rem",
            backgroundColor: "white",
            color: "#333",
          }}
        >
          Sign Up
        </Link> */}
        <StyledLoginButton><div style={{padding: "2rem 3rem",}}>Execute Stored Procedure</div>
        <Link
          to="/login"
          style={{
            textDecoration: "none",
            color: "#fff",
            hover: "#2980b9",
            border: "1px solid whitesmoke",
            padding: "0.5rem 1rem",
            // backgroundColor: "whitesmoke",
            // color: "#333",
          }}
        >
          LOGIN
        </Link>
        </StyledLoginButton>
      </main>
    </>
  );
};

export default Landing;
