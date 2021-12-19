import { PRENDY_ART } from "art";
import { PRENDY_OPTIONS } from "art/options";
import { makePrendyApp } from "prendy";
import { allConcepFuncs, allConcepts } from "concepts";
import StartAndStopConcepts from "concepts/start";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

// startConcepts()

const PrendyApp = makePrendyApp(
  allConcepFuncs,
  allConcepts,
  PRENDY_OPTIONS,
  PRENDY_ART
);

ReactDOM.render(
  <React.StrictMode>
    <PrendyApp>{/* <Custom Stuff /> */}</PrendyApp>
    <StartAndStopConcepts />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
