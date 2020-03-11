import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { GameContext } from '../GameContext';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 500
  }
}));

// type score = {
//   round: number;
//   player0_move: string;
//   player1_move: string;
//   winner: number;
// };

// interface IProps {
//   score: score[];
//   players: string[];
// }

const Score: React.FC<{}> = () => {
  const classes = useStyles();
  const { score, players } = useContext(GameContext);

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Score
      </Typography>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>round</TableCell>
              <TableCell align="right">{players[0]}</TableCell>
              <TableCell align="right">{players[1]}</TableCell>
              <TableCell align="right">winner</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {score.map((parcial_score: any) => (
              <TableRow key={parcial_score.round}>
                <TableCell component="th" scope="row">
                  {parcial_score.round}
                </TableCell>
                <TableCell align="right">
                  {parcial_score.player_0_move}
                </TableCell>
                <TableCell align="right">
                  {parcial_score.player_1_move}
                </TableCell>
                <TableCell align="right">{parcial_score.winner}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Score;

// function mapStateToProps(state) {
//   return {
//     score: state.game.score,
//     players: state.game.players
//   };
// }

// const mapActionsToProps = dispatch => ({
//   getFriends: () => dispatch(getFriends())
//   // deleteFriend: user => dispatch(deleteFriend(user))
// });

// export default connect(mapStateToProps, mapActionsToProps)(Score);

// reduxForm({
//   // a unique name for the form
//   form: 'round'
// })(RoundForm)
