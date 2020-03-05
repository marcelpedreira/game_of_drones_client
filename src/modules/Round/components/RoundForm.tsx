import React, { useState, useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { GameContext } from '../../../GameContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 300
    },
    button: {
      marginTop: '1rem',
      width: '100%'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      width: '100%'
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    }
  })
);

const moves = ['paper', 'rock', 'scissors'];

interface IProps {
  onSubmit: (move: string) => void;
  player: string;
  round: string;
}

const RoundForm: React.FC<IProps> = ({ onSubmit, player, round }) => {
  const classes = useStyles();
  const { players } = useContext(GameContext);
  const [move, setMove] = useState('');

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSubmit(move);
    setMove('');
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMove(event.target.value as string);
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        {`Round ${round}`}
      </Typography>
      <Typography variant="h4" gutterBottom>
        {players[parseInt(player)]}
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-simple-select-label">Select Move</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={move}
            onChange={handleChange}
          >
            {moves.map(move => (
              <MenuItem key={move} value={move}>
                {move}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          type="submit"
        >
          Ok
        </Button>
      </form>
    </div>
  );
};

export default RoundForm;
