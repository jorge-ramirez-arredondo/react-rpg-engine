import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import { useGameModuleLoader } from "../utilities/GameModuleLoader";

function Exploration(props) {
  var _useGameModuleLoader = useGameModuleLoader(),
      loading = _useGameModuleLoader.loading,
      activeModule = _useGameModuleLoader.activeModule;

  var playerName = useSelector(function (state) {
    return state.game.player.name;
  });

  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      dialog = _useState2[0],
      setDialog = _useState2[1];

  if (activeModule === null || loading) {
    return "Loading...";
  }

  var testScript = activeModule.scenes.test;
  console.warn("Interpreter", testScript);
  console.warn(dialog);
  return /*#__PURE__*/React.createElement(React.Fragment, null, "Exploration", /*#__PURE__*/React.createElement("div", null, "Hello ", playerName, "!"), /*#__PURE__*/React.createElement(ReactMarkdown, {
    source: dialog
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      var _testScript$next = testScript.next(),
          value = _testScript$next.value;

      setDialog(value ? value.dialog.trim() : "");
    }
  }, "Next"));
}

export default Exploration;