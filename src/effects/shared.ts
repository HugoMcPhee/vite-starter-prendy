import { loadPrendyState, savePrendyState } from "prendy";
import { makeEffects, runEffectsGroup } from "repond";

export const sharedEffects = makeEffects(({ itemEffect, effect }) => ({
  exampleRule: itemEffect({
    run({ newValue: isPressed }) {
      if (isPressed) {
        console.log("z key pressed");
        savePrendyState();
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
        await loadPrendyState();
        runEffectsGroup("storyPart");
        // storyPartRules.runAll(); // run all story part rules here
      }
    },
    check: { prop: "KeyM", type: "keyboards" },
    atStepEnd: true,
    step: "story", // story insead of input, so virtual stick animations dont overwrite the story click ones
  }),
}));
