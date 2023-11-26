import { stylesBySpecialText } from "assets/fonts";
import { prendy, setState } from "stores/stores";

const onUsePickupAtTrigger = prendy.rules.makeOnUsePickupAtTrigger({
  stairy: {
    door_to_basement: {
      async key() {
        // when using the "key" pickup at the "door_to_basement" trigger
      },
    },
  },
});

const onUsePickupToTalk = prendy.rules.makeOnUsePickupToTalk({
  walker: { async hug() {} },
});

const onUsePickupGenerally = prendy.rules.makeOnUsePickupGenerally({
  async key({ storyState: { exampleStoryToggle } }) {
    if (exampleStoryToggle) {
    } else {
    }

    await prendy.story.speech.showSpeech("a big key 🗝️", { stylesBySpecialText });
    // await showMiniBubble("🗝️");
  },
  async hug({ storyState: {} }) {
    await prendy.story.speech.showSpeech("a big hug 🗝️", { stylesBySpecialText });
    // await showMiniBubble("🗝️");
  },
});

export const pickupsRules = prendy.rules.makePickupsRules({
  onUsePickupAtTrigger,
  onUsePickupGenerally,
  onUsePickupToTalk,
});
