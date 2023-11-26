import { prendy } from "stores/stores";

const { makeTouchRules } = prendy.rules;

export const touchRules = makeTouchRules({
  walker() {},
});

export const nearTalkRules = makeTouchRules(
  {
    walker() {},
    // gear() {
    //   showMiniBubble("🖐");
    // },
  },
  { distanceType: "talk" }
);
export const nearTalkLeaveRules = makeTouchRules(
  {
    walker() {},
    // gear() {
    //   hideMiniBubble();
    // },
  },
  { distanceType: "talk", whenLeave: true }
);
