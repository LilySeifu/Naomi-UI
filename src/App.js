import React, { useState, useEffect } from "react";
import './App.css';
import RunJobButton from './components/RunJobButton';
import { Home, Landing, Login } from "../src/components/screens";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Link,
  NavLink,
  Router,
} from "react-router-dom";
import ReactGA from "react-ga";

function App() {
  const TRACKING_ID = "G-C5VSZ4WL1X"; // OUR_TRACKING_ID
  ReactGA.initialize(TRACKING_ID);
  const [user, setUser] = useState({});
  console.log(user);

  useEffect(() => {
    const theUser = localStorage.getItem("user");

    if (theUser && !theUser.includes("undefined")) {
      console.log(theUser);
      setUser(JSON.parse(theUser));
    }
  }, []);

  return (
    <>
      <Routes>
          <Route
            path="/"
            element={user?.email ? <Navigate to="/home" /> : <Landing />}
          />
          <Route
            path="/login"
            element={user?.email ? <Navigate to="/home" /> : <Login />}
          />

          <Route
            path="/home"
            element={
              user?.email ? 
                <Home
                  user={user}
                />
               : (
                <Navigate to="/" />
              )
            }
          />

          <Route
            path="/RunJobButton"
            element={
              <RunJobButton/>
            }
          />
      </Routes>
    </>
  );
}

export default App;
