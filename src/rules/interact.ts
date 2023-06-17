import { prendy } from "stores/stores";

const onInteractAtTrigger = prendy.rules.makeOnInteractAtTrigger({
  stairy: {
    async door_to_basement() {
      // when the player touches the "door_to_basement" trigger
      await prendy.story.speech.showSpeech("I just came from there 🤔");
    },
  },
});

const onInteractAtTalk = prendy.rules.makeOnInteractToTalk({
  async walker() {},
});

export const interactButtonRules = prendy.rules.makeInteractButtonRules({
  onInteractAtTrigger,
  onInteractAtTalk,
});
