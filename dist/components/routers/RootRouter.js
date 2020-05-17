import React from "react";
import { MemoryRouter, Switch, Route, Redirect } from "react-router-dom";
import routes from "../../constants/routes";
import MainMenu from "../views/MainMenu";
import GameViewsRouter from "./GameViewsRouter";

function RootRouter(props) {
  return /*#__PURE__*/React.createElement(MemoryRouter, null, /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Redirect, {
    from: "/",
    to: routes.mainMenu.$path,
    exact: true
  }), /*#__PURE__*/React.createElement(Route, {
    path: routes.mainMenu.$path,
    exact: true
  }, /*#__PURE__*/React.createElement(MainMenu, null)), /*#__PURE__*/React.createElement(Route, {
    path: routes.gameViews.$path
  }, /*#__PURE__*/React.createElement(GameViewsRouter, null)), /*#__PURE__*/React.createElement(Route, {
    render: function render(_ref) {
      var location = _ref.location;
      return "Error 404 - Unknown path \"".concat(location.pathname, "\"");
    }
  })));
}

export default RootRouter;