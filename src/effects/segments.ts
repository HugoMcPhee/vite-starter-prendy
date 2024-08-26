import { initCamSegmentEffects } from "prendy";
// NOTE need to import this file in effects.ts to make sure it's initialized

initCamSegmentEffects({
  // define which segments should show for cameras
  stairy: {
    room_camera: ({ storyState: { exampleStoryToggle } }) => {
      console.log("exampleStoryToggle", exampleStoryToggle);
      if (exampleStoryToggle === true) {
        console.log("was true");
        return "start";
      } else {
        console.log("was false");
        return "start";
      }
    },
  },
});
