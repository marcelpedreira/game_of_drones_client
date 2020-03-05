import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import RoundForm from '../components/RoundForm';
import Score from '../../../components/Score';
import { GameContext } from '../../../GameContext';
import { RouteComponentProps } from 'react-router-dom';
import { History } from 'history';

const useStyles = makeStyles(theme => ({
  root: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflowX: 'auto'
  }
}));

const rules = [
  { move: 'paper', kills: 'rock' },
  { move: 'rock', kills: 'scissors' },
  { move: 'scissors', kills: 'paper' }
];

type Props = RouteComponentProps<{ round: string; player: string }>;

export interface RoundContainerProps {
  props: Props;
  history: History;
}

const RoundContainer: React.SFC<Props> = props => {
  const classes = useStyles();
  const { updateScore, players, winner } = useContext(GameContext);
  const [player_0_move, setPlayer_0_move] = useState('');
  const { player, round } = props.match.params;

  useEffect(() => {
    if (winner !== 'none') return props.history.push('/result');
  }, [props.match.params.round]);

  const handleSubmit: (move: string) => void = move => {
    if (player === '0') {
      setPlayer_0_move(move);
      props.history.push(`/round/${round}/player/1`);
    } else {
      const player_1_move = move;
      let round_winner = 'tie';
      if (
        rules.filter(
          (rule: any) =>
            rule.move === player_1_move && rule.kills === player_0_move
        ).length > 0
      )
        round_winner = players[1];
      if (
        rules.filter(
          (rule: any) =>
            rule.move === player_0_move && rule.kills === player_1_move
        ).length > 0
      )
        round_winner = players[0];
      updateScore({
        round: parseInt(round),
        player_0_move,
        player_1_move,
        winner: round_winner
      });
      props.history.push(`/round/${parseInt(round) + 1}/player/0`);
    }
  };

  return (
    <Grid container spacing={5} className={classes.root}>
      <Grid item md={6} xs={12}>
        <RoundForm onSubmit={handleSubmit} player={player} round={round} />
      </Grid>
      {parseInt(round) > 1 ? (
        <Grid item md={6} xs={12}>
          <Score />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default RoundContainer;
