import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import TextField from "../../../components/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 300,
    margin: '2rem 0'
  },
  field: {
    margin: '0.8rem 0'
  },
  button: {
    marginTop: '1rem',
    width: '100%'
  }
}));

interface IProps {
  onSubmit: (players: string[]) => void;
}

const HomeForm: React.FC<IProps> = ({ onSubmit }) => {
  const classes = useStyles();
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSubmit([player1, player2]);
  };

  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          label="Player 1"
          fullWidth
          margin="dense"
          className={classes.field}
          value={player1}
          onChange={e => setPlayer1(e.target.value)}
        />
        <TextField
          required
          label="Player 2"
          fullWidth
          margin="dense"
          className={classes.field}
          value={player2}
          onChange={e => setPlayer2(e.target.value)}
        />

        {/* <Field name="player1" label="Player 1" component={TextField} fullWidth margin="dense" className={classes.field}/>
        <Field name="player2" label="Player 2" component={TextField} fullWidth margin="dense" className={classes.field}/> */}

        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          type="submit"
        >
          Start
        </Button>
      </form>
    </div>
  );
};

export default HomeForm;

// export default reduxForm({
//   form: 'home'
// })(HomeForm);
