import React, { useState, useEffect, useContext } from "react";
import GameMasterClass from "classes/GameMaster";

const GameAPIContext = React.createContext(null);
const {
  Provider: GameAPIProvider,
  Consumer: GameAPIConsumer
} = GameAPIContext;

function useGameAPI() {
  return useContext(GameAPIContext);
}

function GameMaster(props) {
  const { children, savedGameState } = props;

  const [gameMaster] = useState(() => new GameMasterClass());
  const [gameStateLoading, setGameStateLoading] = useState(true);
  const [gameState, setGameState] = useState();

  useEffect(() => {
    setGameStateLoading(true);

    const promise = savedGameState
      ? gameMaster.loadGameState(savedGameState)
      : gameMaster.loadNewGame();

    promise.then(() => {
      setGameState(gameMaster.gameState);
      setGameStateLoading(false);
    });
  }, [gameMaster, savedGameState]);

  const gameAPI = {
    gameState,
    gameStateLoading
  };

  return (
    <GameAPIProvider value={gameAPI}>
      {children}
    </GameAPIProvider>
  );
}

export default GameMaster;
export {
  GameAPIConsumer,
  useGameAPI
};
