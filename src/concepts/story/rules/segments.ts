import { makeCamSegmentRules } from "concepts/story/utils";

export const camSegmentRules = makeCamSegmentRules({
  // define which segments should show for cameras
  stairy: {
    room_camera: ({ storyState: { exampleStoryToggle } }) =>
      exampleStoryToggle ? "start" : "start",
  },
});
