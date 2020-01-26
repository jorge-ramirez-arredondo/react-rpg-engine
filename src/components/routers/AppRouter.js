import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import history from "utilities/history";
import UIManager from "components/routers/UIManager";

/*
  This router is a very basic override for routing.

  Since the user is not supposed to have control over which page they're viewing
  through the use of the nav bar, the routing just redirects the user back to
  the base route when they try to navigate away.

  The UIManager is used for handling page and menu management instead.
*/
function AppRouter(props) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact>
          <UIManager />
        </Route>
	      <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default AppRouter;
