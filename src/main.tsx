import { PRENDY_ASSETS } from "assets/assets";
import { PRENDY_OPTIONS } from "assets/options";
import { makePrendyApp } from "prendy";
import { storeHelpers, stores } from "stores/stores";
import StartAndStopRules from "stores/start";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { canvasRefs } from "rules/rules";

const PrendyApp = makePrendyApp(storeHelpers, stores, PRENDY_OPTIONS, PRENDY_ASSETS);

ReactDOM.render(
  <React.StrictMode>
    <PrendyApp>{/* <Custom Stuff /> */}</PrendyApp>
    <StartAndStopRules />
    {/* <canvas
      ref={(ref) => {
        canvasRefs.ctx = ref?.getContext("2d");
      }}
      id="fpscanvas"
      width="200px"
      height="100px"
      style={{ position: "absolute", bottom: 0, right: 0, width: "200px", height: "100px", zIndex: 10000 }}
    ></canvas> */}
  </React.StrictMode>,
  document.getElementById("root")
);
