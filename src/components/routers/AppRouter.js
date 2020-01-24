import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import history from "utilities/history";
import routes from "constants/routes";
import MainMenu from "components/pages/MainMenu";
import GameRouter from "components/routers/GameRouter";

function AppRouter(props) {
  return (
    <Router hisotyr={history}>
      <Switch>
        <Route path={routes.mainMenu}>
          <MainMenu />
        </Route>
        <Route path={routes.game}>
        	<GameRouter />
        </Route>
	      <Redirect to={routes.mainMenu} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
