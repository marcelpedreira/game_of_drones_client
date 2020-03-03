import React, { createContext, useState } from 'react';

export const GameContext = createContext();

const GameContextProvider = (props) => {
  const [players, setPlayers] = useState(['player 1', 'player 2']);
  const [score, setScore] = useState([]);

  const changePlayers = (players) => {
    setPlayers(players);
  }

  const cleanScore = () => {
    setScore([])
  }

  return (
    <GameContext.Provider value={{players, changePlayers, score, cleanScore}}>
      {props.children}
    </GameContext.Provider>
  )
}

export default GameContextProvider;