import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import gameActions from "store/actions/game";
import routes from "constants/routes";

function MainMenu(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <React.Fragment>
      Main Menu
      <div>
        <button
          onClick={() => {
            dispatch(gameActions.newGame());
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
