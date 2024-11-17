import { makePrendyOptions } from "prendy";

export const PRENDY_OPTIONS = makePrendyOptions({
  place: "basement",
  segment: "start",
  camera: "first_cam",
  heldPickups: [],
  playerCharacter: "walker",
  playerAnimations: { idle: "walker_idle", walking: "walker_walking" },
  zoomLevels: { default: 1.1, max: 2 },
  walkSpeed: 6,
  // walkSpeed: 4,
  animationSpeed: 1,
  gameTimeSpeed: 1,
  headHeightOffsets: {
    walker: 1.5,
  },

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
  hasJumping: true,
});
