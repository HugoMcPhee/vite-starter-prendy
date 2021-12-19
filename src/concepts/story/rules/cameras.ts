import { makeCamChangeRules } from "concepts/story/utils";

export const camChangeRules = makeCamChangeRules({
  basement: {
    async first_cam({ storyState: { exampleStoryToggle } }) {},
  },
});
