import { showSpeech } from "prendy";
import { makeInteractButtonEffects, makeOnInteractAtTrigger, makeOnInteractToTalk } from "prendy";
import { runEvent } from "repond-events";

export const interactButtonEffects = makeInteractButtonEffects({
  onInteractAtTrigger: makeOnInteractAtTrigger({
    stairy: {
      async door_to_basement() {
        // when the player touches the "door_to_basement" trigger
        runEvent("speech", "say", { what: "I just came from there 🤔" });
      },
    },
  }),
  onInteractAtTalk: makeOnInteractToTalk({
    async walker() {},
  }),
});
