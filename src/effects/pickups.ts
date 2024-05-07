import { stylesBySpecialText } from "assets/fonts";
import { initPickupsEffects, makeOnUsePickupAtTrigger, makeOnUsePickupGenerally, makeOnUsePickupToTalk } from "prendy";
import { runEvent } from "repond-events";
// NOTE need to import this file in effects.ts to make sure it's initialized

const onUsePickupAtTrigger = makeOnUsePickupAtTrigger({
  stairy: {
    door_to_basement: {
      async key() {
        // when using the "key" pickup at the "door_to_basement" trigger
      },
    },
  },
});

const onUsePickupToTalk = makeOnUsePickupToTalk({
  walker: { async hug() {} },
});

const onUsePickupGenerally = makeOnUsePickupGenerally({
  async key({ storyState: { exampleStoryToggle } }) {
    if (exampleStoryToggle) {
    } else {
    }
    runEvent("speech", "say", { what: "a big key 🗝️", stylesBySpecialText });
  },
  async hug({ storyState: {} }) {
    runEvent("speech", "say", { what: "a big hug 🗝️", stylesBySpecialText });
  },
});

initPickupsEffects({
  onUsePickupAtTrigger,
  onUsePickupGenerally,
  onUsePickupToTalk,
});
