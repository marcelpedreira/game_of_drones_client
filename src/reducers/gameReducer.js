import {
  UPDATE_NAMES,
  UPDATE_SCORE,
  CLEAR_SCORE
} from '../actions/types';

const DEFAULT_STATE = {
  moves: [
    {id: 1, name:'paper'}, 
    {id: 2, name:'rock'}, 
    {id: 3, name:'scissors'}, 
  ],
  rules: [
    { move: "paper", kills: "rock"},
    { move: "rock", kills: "scissors"},
    { move: "scissors", kills: "paper"},
  ],
  players: ['player 1', 'player 2'],
  score: [],
  winner: 'none',
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case UPDATE_NAMES:
      const players = [action.payload.get('player1'), action.payload.get('player2')];
      return { ...state, players };
    case UPDATE_SCORE:
      const score = [ ...state.score, action.payload ];
      const player1_wins = score.filter(partial_score => partial_score.winner == 0);
      const player2_wins = score.filter(partial_score => partial_score.winner == 1);
      let winner = 'none';
      if(player1_wins.length == 3) winner = 0;
      if(player2_wins.length == 3) winner = 1;
      return { ...state, score, winner };
    case CLEAR_SCORE:
      return { ...state, score: [], winner: 'none' };
    default:
      return state;
  }
};
