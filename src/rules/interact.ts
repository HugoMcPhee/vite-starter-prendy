import { makeOnInteractAtTrigger, makeOnInteractToTalk } from "stores/story/utils";

export const onInteractAtTrigger = makeOnInteractAtTrigger({
  stairy: {
    async door_to_basement() {
      // when the player touches the "door_to_basement" trigger
    },
  },
});

export const onInteractAtTalk = makeOnInteractToTalk({
  async walker() {},
});
