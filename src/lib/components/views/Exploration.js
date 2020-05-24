import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";

import { useGameModule } from "lib/components/utilities/GameModulesManager";

function Exploration(props) {
  const { module, loading } = useGameModule("start");
  const playerName = useSelector((state) => state.game.player.name);
  const [dialog, setDialog] = useState("");

  if (module === null || loading) {
    return "Loading...";
  }

  const testScript = module.scenes.test;

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
