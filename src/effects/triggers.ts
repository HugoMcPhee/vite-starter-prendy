import { hideMiniBubble } from "prendy";
import { makeTriggerEffects } from "prendy";

export const triggerEffects = makeTriggerEffects({
  walker: {
    stairy: {
      // when bumpng into the "door_to_basement" trigger
      async door_to_basement() {},
    },
  },
});

export const triggerLeaveEffects = makeTriggerEffects(
  {
    walker: {
      stairy: {
        door_to_basement: () => hideMiniBubble(),
      },
    },
  },
  { whenLeave: true }
);
