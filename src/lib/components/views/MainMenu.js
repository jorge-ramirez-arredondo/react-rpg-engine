import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import gameActions from "lib/store/actions/game";
import routes from "lib/constants/routes";
import { useEngineConfig } from "lib/components/utilities/EngineConfigProvider";

function MainMenu(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const { newGamePlayState } = useEngineConfig();

  return (
    <React.Fragment>
      Main Menu
      <div>
        <button
          onClick={() => {
            dispatch(gameActions.newGame({ initialPlayState: newGamePlayState }));
            history.push(routes.gameViews.explorationView.$path);
          }}
        >
          Start
        </button>
      </div>
    </React.Fragment>
  );
}

export default MainMenu;
