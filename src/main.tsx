import { PRENDY_ASSETS } from "assets/assets";
import { makePrendyApp, prendyStepNames } from "prendy";
import { StrictMode } from "react";
import { render } from "react-dom";
import { customRules } from "rules/rules";
import "./index.css";
import { initRepond } from "repond";
import { stores } from "stores/stores";

initRepond(stores, { stepNames: prendyStepNames });
const PrendyApp = makePrendyApp(PRENDY_ASSETS, customRules);

render(
  <StrictMode>
    <PrendyApp>{/* Add custom components here,like minigames or particles */}</PrendyApp>
    {/* <DebugFrameRate /> */}
  </StrictMode>,
  document.getElementById("root")
);
