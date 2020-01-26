import React from "react";
import { useSelector } from "react-redux";

function Exploration(props) {
  const gameLoading = useSelector((state) => state.game.module.loading);
  const playerName = useSelector((state) => state.game.player.name);

  if (gameLoading) {
    return "Loading...";
  }

	return (
		<React.Fragment>
			Exploration
      <div>
        Hello {playerName}!
      </div>
		</React.Fragment>
	);
}

export default Exploration;
