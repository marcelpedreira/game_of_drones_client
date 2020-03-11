import React, { createContext, useState } from 'react';

export interface IScore {
  winner: string;
  round: number;
  player_0_move: string;
  player_1_move: string;
}

export interface IGameContext {
  players: string[];
  winner: string;
  changePlayers: (players: string[]) => void;
  cleanScore: () => void;
  score: IScore[];
  updateScore: (partial_score: IScore) => void;
}

export const GameContext = createContext<IGameContext>({
  players: ['player 1', 'player 2'],
  winner: 'none',
  score: [],
  changePlayers: () => {},
  cleanScore: () => {},
  updateScore: () => {}
});

const GameContextProvider: React.FC<{}> = props => {
  const [players, setPlayers] = useState(['player 1', 'player 2']);
  const [score, setScore] = useState<IScore[]>([]);
  const [winner, setWinner] = useState('none');

  const changePlayers = (players: string[]) => {
    setPlayers(players);
  };

  const cleanScore = () => {
    setScore([]);
  };

  const updateScore = (parcial_score: IScore) => {
    setScore([...score, parcial_score]);
    const player1_wins = score.filter(score => score.winner === players[0]);
    const player2_wins = score.filter(score => score.winner === players[1]);
    let final_winner: string;
    final_winner = 'none';
    if (player1_wins.length === 3) final_winner = players[0];
    if (player2_wins.length === 3) final_winner = players[1];
    setWinner(final_winner);
  };

  return (
    <GameContext.Provider
      value={{ players, changePlayers, score, cleanScore, winner, updateScore }}
    >
      {props.children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
