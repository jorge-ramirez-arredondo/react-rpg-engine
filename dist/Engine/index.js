import React, { useRef } from "react";
import { Provider, useSelector } from "react-redux";
import RootRouter from "../components/routers/RootRouter";
import generateStore from "../store/generateStore";
import GameModuleLoader from "../components/utilities/GameModuleLoader";

function ConnectedGameModuleLoader(props) {
  var activeModuleKey = useSelector(function (state) {
    return state.game.module.activeModuleKey;
  });
  return /*#__PURE__*/React.createElement(GameModuleLoader, Object.assign({}, props, {
    activeModuleKey: activeModuleKey
  }));
}

function Engine(props) {
  var gameModules = props.gameModules;
  var storeRef = useRef(null);

  if (storeRef.current === null) {
    storeRef.current = generateStore();
  }

  return /*#__PURE__*/React.createElement(Provider, {
    store: storeRef.current
  }, /*#__PURE__*/React.createElement(ConnectedGameModuleLoader, {
    gameModules: gameModules
  }, /*#__PURE__*/React.createElement(RootRouter, null)));
}

export default Engine;