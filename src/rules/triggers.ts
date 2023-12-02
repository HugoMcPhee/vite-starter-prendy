import { hideMiniBubble } from "prendy";
import { makeTriggerRules } from "prendy";

export const triggerRules = makeTriggerRules({
  walker: {
    stairy: {
      // when bumpng into the "door_to_basement" trigger
      async door_to_basement() {},
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
