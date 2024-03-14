import delay from "delay";
import {
  enableMovement,
  hideMiniBubble,
  makePlaceLoadEffects,
  makePlaceUnloadEffects,
  showMiniBubble,
  stopAllMusic,
  takePickup,
} from "prendy";

export const placeLoadEffects = makePlaceLoadEffects(
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

export const placeUnloadEffects = makePlaceUnloadEffects({
  async stairy() {
    // hideDoll("walker");
  },
});
