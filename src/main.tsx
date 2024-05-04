import { PRENDY_ASSETS } from "assets/assets";
import { PrendyApp, initPrendy, prendyStepNames } from "prendy";
import { StrictMode } from "react";
import { render } from "react-dom";
import { initRepond } from "repond";
import { initMovers } from "repond-movers";
import { stores } from "stores/stores";
import "./effects/effects"; //IMPORTANT: import effects to initialize them
import "./events/events"; //IMPORTANT: import effects to initialize them
import "./index.css";

initRepond(stores, { stepNames: prendyStepNames });
initMovers(["global", "main", "elapsedGameTime"]);
initPrendy(PRENDY_ASSETS);

render(
  <StrictMode>
    <PrendyApp>{/* Custom components can go here, like minigames or particles */}</PrendyApp>
    {/* <DebugFrameRate /> */}
  </StrictMode>,
  document.getElementById("root")
);
