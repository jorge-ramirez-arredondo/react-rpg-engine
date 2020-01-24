import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import routes from "constants/routes";
import Exploration from "components/pages/Exploration";

function GameRouter(props) {
  return (
    <Switch>
      <Route path={routes.exploration}>
        <Exploration />
      </Route>
    </Switch>
  );
}

export default GameRouter;
