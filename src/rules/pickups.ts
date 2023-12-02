import { stylesBySpecialText } from "assets/fonts";
import {
  makeOnUsePickupAtTrigger,
  makeOnUsePickupGenerally,
  makeOnUsePickupToTalk,
  makePickupsRules,
  showSpeech,
} from "prendy";

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

    await showSpeech("a big key 🗝️", { stylesBySpecialText });
    // await showMiniBubble("🗝️");
  },
  async hug({ storyState: {} }) {
    await showSpeech("a big hug 🗝️", { stylesBySpecialText });
    // await showMiniBubble("🗝️");
  },
});

export const pickupsRules = makePickupsRules({
  onUsePickupAtTrigger,
  onUsePickupGenerally,
  onUsePickupToTalk,
});
