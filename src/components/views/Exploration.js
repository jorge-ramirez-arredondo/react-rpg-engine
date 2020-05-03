import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

import { useGameModuleLoader } from "components/utilities/GameModuleLoader";

function Exploration(props) {
  const { loading, activeModule } = useGameModuleLoader();
  const playerName = useSelector((state) => state.game.player.name);
  const [dialog, setDialog] = useState("");

  if (activeModule === null || loading) {
    return "Loading...";
  }

  const testScript = activeModule.scenes.test;

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
