import { PRENDY_ART } from "art";
import { PRENDY_OPTIONS } from "art/options";
import { makePrendyApp } from "prendy";
import { storeHelpers, stores } from "stores";
import StartAndStopRules from "stores/start";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// startConcepts()

const PrendyApp = makePrendyApp(
  storeHelpers,
  stores,
  PRENDY_OPTIONS,
  PRENDY_ART
);

ReactDOM.render(
  <React.StrictMode>
    <PrendyApp>{/* <Custom Stuff /> */}</PrendyApp>
    <StartAndStopRules />
  </React.StrictMode>,
  document.getElementById("root")
);
