import { getRefs, getState, makeRules, setState as set } from "stores";
import {
  enableMovement,
  setCamera,
  setDollToSpot,
  showStoryView,
} from "stores/story/utils";
import delay from "delay";
import { camChangeRules } from "./cameras";
import { onInteractAtTalk, onInteractAtTrigger } from "./interact";
import { makePickupsRules } from "./pickups";
import { placeLoadRules, placeNotLoadedRules } from "./places";
import { camSegmentRules } from "./segments";
import { storyPartRules } from "./storyParts";
import { nearTalkLeaveRules, nearTalkRules, touchRules } from "./touches";
import { triggerLeaveRules, triggerRules } from "./triggers";

export const storyRules = makeRules(({ itemEffect, effect }) => ({
  whenInteractButtonClicked: itemEffect({
    run() {
      onInteractAtTrigger();
      onInteractAtTalk();
    },
    check: {
      prop: "interactButtonPressTime",
      type: "players",
    },
    // atStepEnd: true,
    step: "story", // story insead of input, so virtual stick animations dont overwrite the story click ones
  }),
  //

  //

  whenPressCheckpointButton: itemEffect({
    async run({ newValue }) {
      const { exampleStoryToggle } = getState().story.main;
      const { nowPlaceName, playerMovingPaused } = getState().global.main;

      if (playerMovingPaused) return;

      // isRunningFromAlien
      const storyRefs = getRefs().story.main;

      showStoryView(false);

      enableMovement(false);
      await delay(1000);

      if (nowPlaceName === "stairy") {
        setDollToSpot({
          doll: "walker",
          place: "stairy",
          spot: "start_spot",
        });
        setCamera("stairy", "room_camera");
      }
      await delay(1000);
      enableMovement();
      showStoryView();
      // showSpeech("🥱 mustve been a dream... 😅");
    },
    check: { prop: "KeyZ", type: "keyboards" },
  }),
  //
}));

// Maybe

export function startAllOtherStoryRules() {
  // NOTE camSegmentRules are now options chekced when changing segment
  makePickupsRules();
  if (!camSegmentRules) {
    // this doesn't do anything, just makes sure the file's imported and runs
    console.log("need to import camSegmentRules to make sure that file runs");
  }
  storyPartRules.startAll();
  camChangeRules.startAll();
  triggerRules.startAll();
  triggerLeaveRules.startAll();
  touchRules.startAll();
  nearTalkRules.startAll();
  nearTalkLeaveRules.startAll();
  placeLoadRules.startAll();
  placeNotLoadedRules.startAll();

  return function stopAllOtherStoryRules() {
    storyPartRules.stopAll();
    camChangeRules.stopAll();
    triggerRules.stopAll();
    triggerLeaveRules.stopAll();
    touchRules.stopAll();
    nearTalkRules.stopAll();
    nearTalkLeaveRules.stopAll();
    placeLoadRules.stopAll();
    placeNotLoadedRules.stopAll();
  };
}
