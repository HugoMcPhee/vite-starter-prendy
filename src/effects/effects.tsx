import { prendyEffectGroups, prendyParamEffectGroups } from "prendy";
import { initEffectGroups, initParamEffectGroups } from "repond";
import { camChangeEffects, camLeaveEffects } from "./cameras";
import { interactButtonEffects } from "./interact";
import "./pickups"; // IMPORTANT: import effects to initialize them
import { placeLoadEffects, placeUnloadEffects } from "./places";
import "./segments"; // IMPORTANT: import effects to initialize them
import { sharedEffects } from "./shared";
import { storyPartEffects } from "./storyParts";
import { nearTalkEffects, nearTalkLeaveEffects, touchEffects } from "./touches";
import { triggerEffects, triggerLeaveEffects } from "./triggers";
import { repondEventsEffectGroups } from "repond-events";

export const allEffectGroups = initEffectGroups({
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
  ...prendyEffectGroups,
});

export const allParamEffectGroups = initParamEffectGroups({
  ...prendyParamEffectGroups,
});

declare module "repond/src/declarations" {
  interface CustomRepondTypes {
    EffectGroups: typeof allEffectGroups;
    ParamEffectGroups: typeof allParamEffectGroups;
  }
}
