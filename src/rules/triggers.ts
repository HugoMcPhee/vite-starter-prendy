import { hideMiniBubble, makeTriggerRules } from "stores/story/utils";

export const triggerRules = makeTriggerRules({
  walker: {
    stairy: {
      async door_to_basement() {
        // when bumpng into the "door_to_basement" trigger
      },
    },
  },
});

export const triggerLeaveRules = makeTriggerRules(
  {
    walker: {
      stairy: {
        door_to_basement: () => hideMiniBubble(),
      },
    },
  },
  { whenLeave: true }
);
