import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import RoundForm from '../components/RoundForm';
import Score from '../../../components/Score';
import { updateScore } from '../../../actions';
import { GameContext } from '../../../GameContext';

class RoundContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      player0_move: {}
    };
  }

  componentDidUpdate(prevProps) {
    const {round} = this.props.match.params;
    const prevRound = prevProps.match.params.round;
    const {winner, history} = this.props;
    if(prevRound != round){
      if(winner != 'none')
        return history.push('/result');
    }
  }

  handleSubmit(data) {
    const {player, round} = this.props.match.params;
    const {history, rules, updateScore} = this.props;
    if(player == 0){
      this.setState(prevState => {
        return { player0_move: data.get('move')};
      });
      history.push(`/round/${round}/player/1`)
    }
    else{
      const player1_move = data.get('move');
      const player0_move = this.state.player0_move;
      let winner = 'none';
      if((rules.filter(rule => rule.move == player1_move && rule.kills == player0_move)).length > 0) winner = 1;
      if((rules.filter(rule => rule.move == player0_move && rule.kills == player1_move)).length > 0) winner = 0;
      updateScore({round, player0_move, player1_move, winner});
      history.push(`/round/${parseInt(round) + 1}/player/0`);
    }
  }

  render() {
    const style = {
      width: '90%',
      marginLeft: 'auto',
      marginRight: 'auto',
      overflowX: 'auto',
    };
    const {player, round} = this.props.match.params;
    return ( 
      <GameContext.Consumer>{(gameContext) => {
        const { players } = gameContext;
        return ( 
          <Grid container spacing={5} style={style}>
            <Grid item md={6} xs={12}>
              <RoundForm round={round} player={player} players={players} onSubmit={this.handleSubmit} />
            </Grid>
            {round > 1 ? (
              <Grid item md={6} xs={12}>
                <Score data={{move: 'paper'}} />
              </Grid>
            ) : null}
          </Grid>
        );
      }}</GameContext.Consumer>
    );
  }
  
}

function mapStateToProps(state) {
  return {
    rules: state.game.rules,
    winner: state.game.winner,
  };
}

const mapActionsToProps = dispatch => ({
  updateScore: data => dispatch(updateScore(data))
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(RoundContainer);