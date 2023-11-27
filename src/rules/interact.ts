import { showSpeech } from "prendy";
import { makeInteractButtonRules, makeOnInteractAtTrigger, makeOnInteractToTalk } from "prendy";

const onInteractAtTrigger = makeOnInteractAtTrigger({
  stairy: {
    async door_to_basement() {
      // when the player touches the "door_to_basement" trigger
      await showSpeech("I just came from there 🤔");
    },
  },
});

const onInteractAtTalk = makeOnInteractToTalk({
  async walker() {},
});

export const interactButtonRules = makeInteractButtonRules({
  onInteractAtTrigger,
  onInteractAtTalk,
});
