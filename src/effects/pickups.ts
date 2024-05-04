import { stylesBySpecialText } from "assets/fonts";
import { initPickupsEffects, makeOnUsePickupAtTrigger, makeOnUsePickupGenerally, makeOnUsePickupToTalk } from "prendy";
import { runEvent } from "repond-events";

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
    runEvent("speech", "showSpeech", { text: "a big key 🗝️", options: { stylesBySpecialText } });
  },
  async hug({ storyState: {} }) {
    runEvent("speech", "showSpeech", { text: "a big hug 🗝️", options: { stylesBySpecialText } });
  },
});

initPickupsEffects({
  onUsePickupAtTrigger,
  onUsePickupGenerally,
  onUsePickupToTalk,
});
