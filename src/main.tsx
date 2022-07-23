import { PRENDY_ASSETS } from "assets/assets";
import { PRENDY_OPTIONS } from "assets/options";
import { makePrendyApp } from "prendy";
import { storeHelpers, stores } from "stores/stores";
import StartAndStopRules from "stores/start";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const PrendyApp = makePrendyApp(storeHelpers, stores, PRENDY_OPTIONS, PRENDY_ASSETS);

ReactDOM.render(
  <React.StrictMode>
    <PrendyApp>{/* <Custom Stuff /> */}</PrendyApp>
    <StartAndStopRules />
  </React.StrictMode>,
  document.getElementById("root")
);
