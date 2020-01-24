import { loadModule } from "gameModules";

const newGameState = {
  moduleKey: "start",
  name: "World"
};

class GameMaster {
  // Public Attributes
  get gameState() {
    return this.#gameState;
  }

  // Private Attributes
  #gameState;
  #module;

  // Methods
  loadNewGame = async () => this.loadGameState(newGameState);

  loadGameState = async (gameState) => {
    // This shallow freeze is mostly helpful as a reminder not to mutate the
    // gameState directly.
    this.#gameState = Object.freeze(gameState);

    return this.#initializeGame();
  };

  #initializeGame = async () => {
    const { moduleKey } = this.#gameState;

    this.#module = await loadModule(moduleKey);
  };
}

export default GameMaster;
