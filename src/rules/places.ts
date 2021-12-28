import {
  enableMovement,
  hideMiniBubble,
  makePlaceLoadRules,
  makePlaceNotLoadedRules,
  stopAllMusic,
  takePickup,
} from "stores/story/utils";

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
    },
  }
);

export const placeNotLoadedRules = makePlaceNotLoadedRules({
  async stairy() {
    // hideDoll("lock");
  },
});
