import { createBrowserHistory } from 'history';
import reducers from "./reducers";
import { createStore } from 'redux';

const history = createBrowserHistory();
const initialState = {
  game: {
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
    winner: 'none'
  }
};

const store=createStore(
  reducers,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
  // compose(
  //   applyMiddleware(reduxThunk),
  //   window.__REDUX_DEVTOOLS_EXTENSION__ &&
  //     window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
);

// const store = configureStore(initialState, history);

export { history, store };
