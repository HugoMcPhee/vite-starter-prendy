import { makeCamChangeEffects, makeCamLeaveEffects } from "prendy";

export const camChangeEffects = makeCamChangeEffects({
  basement: {
    async first_cam({ storyState: { exampleStoryToggle } }) {},
  },
});

export const camLeaveEffects = makeCamLeaveEffects({
  basement: {
    async first_cam() {},
  },
});
