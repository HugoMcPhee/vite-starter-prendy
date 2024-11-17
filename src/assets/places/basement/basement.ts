import modelFile from "./basement.glb";

import first_cam_probe_image from "./probes/first_cam.env";
import waterfall_cam_probe_image from "./probes/waterfall_cam.env";

import first_cam_start_color_1 from "./backdrops/first_cam_start_color_1.ktx2";
import first_cam_start_depth_1 from "./backdrops/first_cam_start_depth_1.ktx2";
import first_cam_start_color_2 from "./backdrops/first_cam_start_color_2.ktx2";
import first_cam_start_depth_2 from "./backdrops/first_cam_start_depth_2.ktx2";
import waterfall_cam_start_color_1 from "./backdrops/waterfall_cam_start_color_1.ktx2";
import waterfall_cam_start_depth_1 from "./backdrops/waterfall_cam_start_depth_1.ktx2";
import waterfall_cam_start_color_2 from "./backdrops/waterfall_cam_start_color_2.ktx2";
import waterfall_cam_start_depth_2 from "./backdrops/waterfall_cam_start_depth_2.ktx2";

export const backdropsByCamera = {
  "first_cam": {
    "start": {
      frameRate: 12.0,
      totalFrames: 20.0,
      maxFramesPerRow: 4,
      textures: [
        {
          color: first_cam_start_color_1,
          depth: first_cam_start_depth_1,
        },
        {
          color: first_cam_start_color_2,
          depth: first_cam_start_depth_2,
        },
      ],
    },
  },
  "waterfall_cam": {
    "start": {
      frameRate: 12.0,
      totalFrames: 20.0,
      maxFramesPerRow: 4,
      textures: [
        {
          color: waterfall_cam_start_color_1,
          depth: waterfall_cam_start_depth_1,
        },
        {
          color: waterfall_cam_start_color_2,
          depth: waterfall_cam_start_depth_2,
        },
      ],
    },
  },
};

export const probesByCamera = {
  first_cam: first_cam_probe_image,
  waterfall_cam: waterfall_cam_probe_image,
};
export const segmentNamesByCamera = {
  first_cam: [
    'start',
  ],
  waterfall_cam: [
    'start',
  ],
} as const;
export type CameraName = keyof typeof probesByCamera & keyof typeof segmentNamesByCamera;
export const cameraNames = Object.keys(probesByCamera) as Readonly<CameraName[]>;

export const segmentNames = [ 
  'start', 
] as const; 
export type SegmentName = typeof segmentNames[number];

export const wallNames = [
  "wall_1",
] as const;

export const floorNames = [
  "floor_1",
] as const;

export const triggerNames = [
  "the_door",
] as const;

export const spotNames = [
  "start_spot",
] as const;

export const soundspotNames = [
] as const;

export type WallName = typeof wallNames[number];
export type FloorName = typeof floorNames[number];
export type TriggerName = typeof triggerNames[number];
export type SpotName = typeof spotNames[number];

export type SoundspotName = typeof soundspotNames[number];

export const placeInfo = {
  modelFile,
  backdropsByCamera,
  cameraNames,
  segmentNames,
  segmentNamesByCamera,
  wallNames,
  floorNames,
  triggerNames,
  spotNames,
  soundspotNames,
  probesByCamera,
} as const;
