import { makeTouchEffects } from "prendy";

export const touchEffects = makeTouchEffects({
  walker() {},
});

export const nearTalkEffects = makeTouchEffects(
  {
    walker() {},
    // gear() {
    //   showMiniBubble("🖐");
    // },
  },
  { distanceType: "talk" }
);
export const nearTalkLeaveEffects = makeTouchEffects(
  {
    walker() {},
    // gear() {
    //   hideMiniBubble();
    // },
  },
  { distanceType: "talk", whenLeave: true }
);
