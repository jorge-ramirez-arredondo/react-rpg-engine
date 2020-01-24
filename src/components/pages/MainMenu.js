import React from "react";
import { useHistory } from "react-router-dom";

import routes from "constants/routes";

function MainMenu(props) {
  const history = useHistory();

  return (
    <React.Fragment>
      Main Menu
      <div>
        <button onClick={() => history.push(routes.exploration)}>
          Start
        </button>
      </div>
    </React.Fragment>
  );
}

export default MainMenu;
