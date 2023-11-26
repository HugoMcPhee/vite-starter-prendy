import { prendy } from "stores/stores";

export const camChangeRules = prendy.rules.makeCamChangeRules({
  basement: {
    async first_cam({ storyState: { exampleStoryToggle } }) {},
  },
});

export const camLeaveRules = prendy.rules.makeCamLeaveRules({
  basement: {
    async first_cam() {},
  },
});
