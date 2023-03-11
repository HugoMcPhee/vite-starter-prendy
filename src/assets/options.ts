import { getPrendyOptions } from "prendy";
import { CSSProperties } from "react";

// export const WALK_SPEEDS = { normal: 14, swimming: 4 };
export const WALK_SPEEDS = { normal: 6, swimming: 2 };

export const PRENDY_OPTIONS = getPrendyOptions({
  place: "stairy",
  segment: "start",
  camera: "room_camera",
  heldPickups: [],
  playerCharacter: "walker",
  playerAnimations: { idle: "walker_idle", walking: "walker_walking" },
  zoomLevels: { default: 1.1, max: 2 },
  walkSpeed: WALK_SPEEDS.normal,
  animationSpeed: 1,
  headHeightOffset: 1.5,

  doorsInfo: {
    stairy: {
      door_to_basement: {
        toPlace: "basement",
        toSegment: "start",
        toCam: "first_cam",
        toSpot: "start_spot",
      },
    },
    basement: {
      the_door: {
        toPlace: "stairy",
        toSegment: "start",
        toCam: "downstair_camera",
        toSpot: "bottom_stairs_spot",
      },
    },
  },
  modelNamesByPlace: {
    basement: ["walker"],
    stairy: ["walker"],
  },
  hasInteracting: false,
  hasJumping: false,
});

export const fontNames = ["Jua", "Pacifico"] as const; // font names from google fonts
export type FontName = typeof fontNames[number];

// project stuff?

export const stylesBySpecialText: Record<string, CSSProperties> = {
  key: { fontFamily: "Pacifico", color: "rgb(212, 199, 112)" },
};

// segment and opening door puzzle
