import { PRENDY_ART } from "art";
import { PRENDY_OPTIONS } from "art/options";
import { makePrendyApp } from "prendy";
import { allConcepFuncs, allConcepts } from "concepts";
import StartAndStopConcepts from "concepts/start";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

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
