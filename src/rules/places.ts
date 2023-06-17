import { prendy } from "stores/stores";

export const placeLoadRules = prendy.rules.makePlaceLoadRules(
  // at start of any places
  ({ storyState: { exampleStoryToggle } }) => {
    prendy.story.players.enableMovement();
    prendy.story.speech.hideMiniBubble();

    if (exampleStoryToggle) {
    } else {
    }

    prendy.story.sound.stopAllMusic();
  },
  // at start of individual places
  {
    async stairy({ storyState: { exampleStoryToggle } }) {
      prendy.story.players.takePickup("key");
    },
  }
);

export const placeNotLoadedRules = prendy.rules.makePlaceNotLoadedRules({
  async stairy() {
    // hideDoll("walker");
  },
});
