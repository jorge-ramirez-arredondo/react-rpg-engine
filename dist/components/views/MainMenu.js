import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import gameActions from "../../store/actions/game";
import routes from "../../constants/routes";

function MainMenu(props) {
  var dispatch = useDispatch();
  var history = useHistory();
  return /*#__PURE__*/React.createElement(React.Fragment, null, "Main Menu", /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      dispatch(gameActions.newGame());
      history.push(routes.gameViews.explorationView.$path);
    }
  }, "Start")));
}

export default MainMenu;