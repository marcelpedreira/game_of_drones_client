import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    // margin: '10rem 0',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    margin: '3rem 0',
    textTransform: 'uppercase'
  }
}));

function App(props: any) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Typography variant="h1" gutterBottom>
          Game of drones
        </Typography>
      </header>
      {props.children}
    </div>
  );
}

export default App;
