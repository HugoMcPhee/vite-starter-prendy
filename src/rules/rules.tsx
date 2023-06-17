import delay from "delay";
import { getState, makeRules, prendy } from "stores/stores";
import { camChangeRules, camLeaveRules } from "./cameras";
import { interactButtonRules } from "./interact";
import { pickupsRules } from "./pickups";
import { placeLoadRules, placeNotLoadedRules } from "./places";
import { camSegmentRules } from "./segments";
import { storyPartRules } from "./storyParts";
import { nearTalkLeaveRules, nearTalkRules, touchRules } from "./touches";
import { triggerLeaveRules, triggerRules } from "./triggers";

export const storyRules = makeRules(({ itemEffect, effect }) => ({
  // TODO add checkpoint support to prendy
  whenPressCheckpointButton: itemEffect({
    async run({ newValue }) {
      const { exampleStoryToggle } = getState().story.main;
      const { nowPlaceName, playerMovingPaused } = getState().global.main;

      if (playerMovingPaused) return;

      prendy.story.scene.showStoryView(false);

      prendy.story.players.enableMovement(false);
      await delay(1000);

      if (nowPlaceName === "stairy") {
        prendy.story.dolls.setDollToSpot({
          doll: "walker",
          place: "stairy",
          spot: "start_spot",
        });
        prendy.story.scene.setCamera("stairy", "room_camera");
      }
      await delay(1000);
      prendy.story.players.enableMovement();
      prendy.story.scene.showStoryView();
    },
    check: { prop: "KeyZ", type: "keyboards" },
  }),
}));

export const customRules = [
  storyRules,
  camSegmentRules,
  storyPartRules,
  camChangeRules,
  camLeaveRules,
  triggerRules,
  triggerLeaveRules,
  touchRules,
  nearTalkRules,
  nearTalkLeaveRules,
  placeLoadRules,
  placeNotLoadedRules,
  pickupsRules,
  interactButtonRules,
];
