import React from "react";
import RunJobButton from "../RunJobButton";
import {
  AppBar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "black",
  },
  title: {
    flexGrow: 1,
    color: "balck",
  },
  
  typography: {
    fontFamily: "Calibri",
  },
 
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
    },
  },

  LMAText: {
    color: "black",
    fontFamily: "Calibri",
    fontSize: "18px",
    fontWeight: "bold",
    alignItems: "center",
  },

  muiAppBarColorPrimary: {
    color: "#fff",
    backgroundColor: "#ffffff",
  },
}));

// Pass User
const Home = ({ user }) => {
  const logout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };
  const classes = useStyles();

  return (
    <>


    <Grid container>

      <Grid item xs ={8} style={{
            // border: "1px solid blue", 
            // marginTop: "5px"
          }}>
          <div style={{ textAlign: "left", margin: "1rem" }}>
            <Typography className={classes.LMAText}>
              Logged in as: {user?.email}
            </Typography>
          {/* <p>
          You are viewing this page because you are logged in.
          </p> */}
          </div>
      </Grid>

      <Grid item xs ={4} style={{
        // border: "1px solid blue",
        // marginTop: "5px",
        display: "flex",
        justifyContent: "flex-end",
        }}>
          <Typography>
            <div>
              <button
                onClick={logout}
                style={{
                  color: "black",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  padding: "0.5rem 1rem",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            </div>
          </Typography>
      </Grid>
      <Grid item xs ={12} style={{
            // border: "1px solid blue", 
            // marginTop: "5px"
          }}>
        {/*<LMAFormMixed historicalActivity={historicalActivity} setHistoricalActivity={setHistoricalActivity}/>*/}
        <RunJobButton />
      </Grid>
    </Grid>
    
    </>
    )};

export default Home;
