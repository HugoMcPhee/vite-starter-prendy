import { makeCamChangeRules, makeCamLeaveRules } from "prendy";

export const camChangeRules = makeCamChangeRules({
  basement: {
    async first_cam({ storyState: { exampleStoryToggle } }) {},
  },
});

export const camLeaveRules = makeCamLeaveRules({
  basement: {
    async first_cam() {},
  },
});
