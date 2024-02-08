import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  button: {
    padding: '15px 30px', // Adjust padding to make the button bigger
  },
}));

const CenteredButtonWithTitle = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h6" gutterBottom>
        Execute Stored Procedure
      </Typography>
      <Button variant="contained" color="primary">
        Run Job
      </Button>
    </Box>
  );
};

export default CenteredButtonWithTitle;
