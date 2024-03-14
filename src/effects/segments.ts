import { initCamSegmentEffects } from "prendy";

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
