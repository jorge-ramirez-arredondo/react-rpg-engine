import React from "react";
import ReactDOM from "react-dom";
import Engine from "lib";
import * as serviceWorker from "./serviceWorker";
import * as gameModuleGetters from "devGameModules/gameModuleGetters";

ReactDOM.render(
  <Engine moduleGetters={gameModuleGetters} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
