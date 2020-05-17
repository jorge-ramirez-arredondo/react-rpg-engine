import React from "react";
import {
  Switch,
  Route
} from "react-router-dom";

import routes from "lib/constants/routes";
import Exploration from "lib/components/views/Exploration";

function GameViewsRouter(props) {
  return (
    <Switch>
      <Route path={routes.gameViews.explorationView.$path} exact>
        <Exploration />
      </Route>
    </Switch>
  );
}

export default GameViewsRouter;
