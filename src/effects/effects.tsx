import { prendyEffectGroups, prendyParamEffectGroups } from "prendy";
import { initEffectGroups } from "repond";
import { initParamEffectGroups } from "repond/src/usable/paramEffects";
import { camChangeEffects, camLeaveEffects } from "./cameras";
import { interactButtonEffects } from "./interact";
import "./pickups"; // IMPORTANT: import effects to initialize them
import { placeLoadEffects, placeUnloadEffects } from "./places";
import "./segments"; // IMPORTANT: import effects to initialize them
import { sharedEffects } from "./shared";
import { storyPartEffects } from "./storyParts";
import { nearTalkEffects, nearTalkLeaveEffects, touchEffects } from "./touches";
import { triggerEffects, triggerLeaveEffects } from "./triggers";

export const allEffectGroups = initEffectGroups({
  ...prendyEffectGroups,
  sharedEffects,
  camChangeEffects,
  camLeaveEffects,
  storyPartEffects,
  placeLoadEffects,
  placeUnloadEffects,
  touchEffects,
  nearTalkEffects,
  nearTalkLeaveEffects,
  triggerEffects,
  triggerLeaveEffects,
  interactButtonEffects,
});

console.log("initParamEffectGroups");
export const allParamEffectGroups = initParamEffectGroups({
  ...prendyParamEffectGroups,
});

declare module "repond/src/declarations" {
  interface CustomRepondTypes {
    EffectGroups: typeof allEffectGroups;
    ParamEffectGroups: typeof allParamEffectGroups;
  }
}
