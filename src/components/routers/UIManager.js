import React from "react";
import { useSelector } from "react-redux";

import viewsMap from "components/views/viewsMap";

function UIManager(props) {
  const currentView = useSelector((state) => state.game.uiManager.currentView);

  const View = viewsMap[currentView];

  return <View />;
}

export default UIManager;
