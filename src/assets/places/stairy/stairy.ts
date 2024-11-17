import modelFile from "./stairy.glb";

import room_camera_probe_image from "./probes/room_camera.env";
import left_door_camera_probe_image from "./probes/left_door_camera.env";
import downstair_camera_probe_image from "./probes/downstair_camera.env";
import stairs_camera_probe_image from "./probes/stairs_camera.env";

import room_camera_start_color_1 from "./backdrops/room_camera_start_color_1.ktx2";
import room_camera_start_depth_1 from "./backdrops/room_camera_start_depth_1.ktx2";
import room_camera_start_color_2 from "./backdrops/room_camera_start_color_2.ktx2";
import room_camera_start_depth_2 from "./backdrops/room_camera_start_depth_2.ktx2";
import left_door_camera_start_color_1 from "./backdrops/left_door_camera_start_color_1.ktx2";
import left_door_camera_start_depth_1 from "./backdrops/left_door_camera_start_depth_1.ktx2";
import left_door_camera_start_color_2 from "./backdrops/left_door_camera_start_color_2.ktx2";
import left_door_camera_start_depth_2 from "./backdrops/left_door_camera_start_depth_2.ktx2";
import downstair_camera_start_color_1 from "./backdrops/downstair_camera_start_color_1.ktx2";
import downstair_camera_start_depth_1 from "./backdrops/downstair_camera_start_depth_1.ktx2";
import downstair_camera_start_color_2 from "./backdrops/downstair_camera_start_color_2.ktx2";
import downstair_camera_start_depth_2 from "./backdrops/downstair_camera_start_depth_2.ktx2";
import stairs_camera_start_color_1 from "./backdrops/stairs_camera_start_color_1.ktx2";
import stairs_camera_start_depth_1 from "./backdrops/stairs_camera_start_depth_1.ktx2";
import stairs_camera_start_color_2 from "./backdrops/stairs_camera_start_color_2.ktx2";
import stairs_camera_start_depth_2 from "./backdrops/stairs_camera_start_depth_2.ktx2";

export const backdropsByCamera = {
  "room_camera": {
    "start": {
      frameRate: 12.0,
      totalFrames: 20.0,
      maxFramesPerRow: 4,
      textures: [
        {
          color: room_camera_start_color_1,
          depth: room_camera_start_depth_1,
        },
        {
          color: room_camera_start_color_2,
          depth: room_camera_start_depth_2,
        },
      ],
    },
  },
  "left_door_camera": {
    "start": {
      frameRate: 12.0,
      totalFrames: 20.0,
      maxFramesPerRow: 4,
      textures: [
        {
          color: left_door_camera_start_color_1,
          depth: left_door_camera_start_depth_1,
        },
        {
          color: left_door_camera_start_color_2,
          depth: left_door_camera_start_depth_2,
        },
      ],
    },
  },
  "downstair_camera": {
    "start": {
      frameRate: 12.0,
      totalFrames: 20.0,
      maxFramesPerRow: 4,
      textures: [
        {
          color: downstair_camera_start_color_1,
          depth: downstair_camera_start_depth_1,
        },
        {
          color: downstair_camera_start_color_2,
          depth: downstair_camera_start_depth_2,
        },
      ],
    },
  },
  "stairs_camera": {
    "start": {
      frameRate: 12.0,
      totalFrames: 20.0,
      maxFramesPerRow: 4,
      textures: [
        {
          color: stairs_camera_start_color_1,
          depth: stairs_camera_start_depth_1,
        },
        {
          color: stairs_camera_start_color_2,
          depth: stairs_camera_start_depth_2,
        },
      ],
    },
  },
};

export const probesByCamera = {
  room_camera: room_camera_probe_image,
  left_door_camera: left_door_camera_probe_image,
  downstair_camera: downstair_camera_probe_image,
  stairs_camera: stairs_camera_probe_image,
};
export const segmentNamesByCamera = {
  room_camera: [
    'start',
  ],
  left_door_camera: [
    'start',
  ],
  downstair_camera: [
    'start',
  ],
  stairs_camera: [
    'start',
  ],
} as const;
export type CameraName = keyof typeof probesByCamera & keyof typeof segmentNamesByCamera;
export const cameraNames = Object.keys(probesByCamera) as Readonly<CameraName[]>;

export const segmentNames = [ 
  'start', 
  'light_flicker', 
] as const; 
export type SegmentName = typeof segmentNames[number];

export const wallNames = [
  "wall_1",
  "wall_2",
  "wall_3",
  "wall_4",
  "wall_5",
  "wall_6",
  "wall_7",
] as const;

export const floorNames = [
  "floor_1",
] as const;

export const triggerNames = [
  "door_to_basement",
  "door_to_roof",
] as const;

export const spotNames = [
  "start_spot",
  "bottom_stairs_spot",
  "top_stairs_spot",
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
