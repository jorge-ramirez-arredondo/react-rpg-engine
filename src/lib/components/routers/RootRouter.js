import React from "react";
import {
  MemoryRouter,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import routes from "lib/constants/routes";
import MainMenu from "lib/components/views/MainMenu";
import GameViewsRouter from "lib/components/routers/GameViewsRouter";

function RootRouter(props) {
  return (
    <MemoryRouter>
      <Switch>
        <Redirect from="/" to={routes.mainMenu.$path} exact />
        <Route path={routes.mainMenu.$path} exact><MainMenu /></Route>
        <Route path={routes.gameViews.$path}><GameViewsRouter /></Route>
        <Route
          render={({ location }) =>
            `Error 404 - Unknown path "${location.pathname}"`
          }
        />
      </Switch>
    </MemoryRouter>
  );
}

export default RootRouter;
