import { prendy } from "stores/stores";

export const camSegmentRules = prendy.rules.makeCamSegmentRules({
  // define which segments should show for cameras
  stairy: {
    room_camera: ({ storyState: { exampleStoryToggle } }) => (exampleStoryToggle ? "start" : "start"),
  },
});
