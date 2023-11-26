import { makeRules, prendy, storeHelpers } from "stores/stores";
import { camChangeRules, camLeaveRules } from "./cameras";
import { interactButtonRules } from "./interact";
import { pickupsRules } from "./pickups";
import { placeLoadRules, placeUnloadRules } from "./places";
import { camSegmentRules } from "./segments";
import { storyPartRules } from "./storyParts";
import { nearTalkLeaveRules, nearTalkRules, touchRules } from "./touches";
import { triggerLeaveRules, triggerRules } from "./triggers";
import { makeMoverUtils } from "repond-movers";

const {} = makeMoverUtils(storeHelpers, ["global", "main", "gameTimeElapsed"]);
export const storyRules = makeRules(({ itemEffect, effect }) => ({
  exampleRule: itemEffect({
    run({ newValue: isPressed }) {
      if (isPressed) {
        console.log("z key pressed");
        prendy.utils.savePrendyState();
      }
    },
    check: { prop: "KeyZ", type: "keyboards" },
    atStepEnd: true,
    step: "story", // story insead of input, so virtual stick animations dont overwrite the story click ones
  }),
  loadPrendyState: itemEffect({
    async run({ newValue: isPressed }) {
      if (isPressed) {
        console.log("m key pressed");
        await prendy.utils.loadPrendyState();
        storyPartRules.runAll(); // run all story part rules here
      }
    },
    check: { prop: "KeyM", type: "keyboards" },
    atStepEnd: true,
    step: "story", // story insead of input, so virtual stick animations dont overwrite the story click ones
  }),
}));

export const customRules = [
  storyRules,
  camSegmentRules,
  storyPartRules,
  camChangeRules,
  camLeaveRules,
  triggerRules,
  triggerLeaveRules,
  touchRules,
  nearTalkRules,
  nearTalkLeaveRules,
  placeLoadRules,
  placeUnloadRules,
  pickupsRules,
  interactButtonRules,
];
