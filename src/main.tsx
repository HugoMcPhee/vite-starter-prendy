import { PRENDY_ASSETS } from "assets/assets";
import { makePrendyApp, prendyStepNames } from "prendy";
import React from "react";
import ReactDOM from "react-dom";
import { customRules } from "rules/rules";
import "./index.css";
import { initRepond } from "repond";
import { stores } from "stores/stores";

initRepond(stores, { stepNames: prendyStepNames });
const PrendyApp = makePrendyApp(PRENDY_ASSETS, customRules);

ReactDOM.render(
  <React.StrictMode>
    <PrendyApp>{/* Add custom components here,like minigames or particles */}</PrendyApp>
    {/* <DebugFrameRate /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
