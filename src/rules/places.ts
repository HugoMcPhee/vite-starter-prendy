import delay from "delay";
import { enableMovement, hideMiniBubble, showMiniBubble, stopAllMusic, takePickup } from "prendy";
import { makePlaceLoadRules, makePlaceUnloadRules } from "prendy";
import { getUsefulStoryStuff } from "prendy/src/helpers/prendyRuleMakers/prendyRuleMakers";
import { getGlobalState } from "prendy/src/helpers/prendyUtils/global";

export const placeLoadRules = makePlaceLoadRules(
  // at start of any places
  ({ storyState: { exampleStoryToggle } }) => {
    enableMovement();
    hideMiniBubble();

    if (exampleStoryToggle) {
    } else {
    }

    stopAllMusic();
  },
  // at start of individual places
  {
    async stairy({ storyState: { exampleStoryToggle } }) {
      takePickup("key");

      await delay(500);
      showMiniBubble("‼️");
    },
  }
);

export const placeUnloadRules = makePlaceUnloadRules({
  async stairy() {
    // hideDoll("walker");
  },
});
