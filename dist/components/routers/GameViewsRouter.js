import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "../../constants/routes";
import Exploration from "../views/Exploration";

function GameViewsRouter(props) {
  return /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Route, {
    path: routes.gameViews.explorationView.$path,
    exact: true
  }, /*#__PURE__*/React.createElement(Exploration, null)));
}

export default GameViewsRouter;