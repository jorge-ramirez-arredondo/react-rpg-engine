import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

function Exploration(props) {
  const gameLoading = useSelector((state) => state.game.module.loading);
  const playerName = useSelector((state) => state.game.player.name);
  const module = useSelector((state) => state.game.module);
  const [dialog, setDialog] = useState("");

  if (gameLoading) {
    return "Loading...";
  }

  const testScript = module.module.scenes.test;

  console.warn("Interpreter", testScript);
  console.warn(dialog);

	return (
		<React.Fragment>
			Exploration
      <div>
        Hello {playerName}!
      </div>
      <ReactMarkdown source={dialog} />
      <button
        onClick={() => {
          const { value } = testScript.next();

          setDialog(value ? value.dialog.trim() : "");
        }}
      >
        Next
      </button>
		</React.Fragment>
	);
}

export default Exploration;
