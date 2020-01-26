import React from "react";
import { useDispatch } from "react-redux";

import { actions as uiManagerActions } from "store/slices/uiManager"
import gameActions from "store/actions/game";
import { viewKeys } from "components/views/viewsMap";

function MainMenu(props) {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      Main Menu
      <div>
        <button
          onClick={() => {
            dispatch(gameActions.newGame());
            dispatch(uiManagerActions.setCurrentView(viewKeys.Exploration));
          }}
        >
          Start
        </button>
      </div>
    </React.Fragment>
  );
}

export default MainMenu;
