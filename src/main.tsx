import { PRENDY_ASSETS } from "assets/assets";
import { makeDebugFrameRate, makePrendyApp } from "prendy";
import React from "react";
import ReactDOM from "react-dom";
import { storeHelpers, stores } from "stores/stores";
import { customRules } from "rules/rules";
import "./index.css";

const PrendyApp = makePrendyApp({
  prendyAssets: PRENDY_ASSETS,
  stores,
  storeHelpers,
  customRules,
});

const DebugFrameRate = makeDebugFrameRate(storeHelpers);

ReactDOM.render(
  <React.StrictMode>
    <PrendyApp>{/* Add custom components here,like minigames or particles */}</PrendyApp>
    {/* <DebugFrameRate /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
