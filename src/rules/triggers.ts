import { hideMiniBubble, makeTriggerRules } from "stores/story/utils";

export const triggerRules = makeTriggerRules({
  stairy: {
    async door_to_basement() {
      // when bumpng into the "door_to_basement" trigger
    },
  },
});

export const triggerLeaveRules = makeTriggerRules(
  {
    stairy: {
      door_to_basement: () => hideMiniBubble(),
    },
  },
  { whenLeave: true }
);
