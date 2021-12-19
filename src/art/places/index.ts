import { placeInfo as basementInfo } from "./basement";
import { placeInfo as stairyInfo } from "./stairy";

export const placeInfoByName = {
  basement: basementInfo,
  stairy: stairyInfo,
} as const;

export type PlaceName = keyof typeof placeInfoByName;

export const placeNames = Object.keys(placeInfoByName) as PlaceName[];

type PlaceInfoByName = typeof placeInfoByName;

export type CameraNameByPlace = {
  [P_PlaceName in PlaceName]: PlaceInfoByName[P_PlaceName]["cameraNames"][number];
};

export type CameraNameFromPlace<
T_Place extends keyof PlaceInfoByName
> = keyof PlaceInfoByName[T_Place]["segmentTimesByCamera"];

export type AnyCameraName = CameraNameByPlace[PlaceName];

export type SpotNameByPlace = {
  [P_PlaceName in PlaceName]: PlaceInfoByName[P_PlaceName]["spotNames"][number];
};
export type AnySpotName = SpotNameByPlace[PlaceName];

export type SoundspotNameByPlace = {
  [P_PlaceName in PlaceName]: PlaceInfoByName[P_PlaceName]["soundspotNames"][number];
};
export type AnySoundspotName = SoundspotNameByPlace[PlaceName];

export type SegmentNameByPlace = {
  [P_PlaceName in PlaceName]: PlaceInfoByName[P_PlaceName]["segmentNames"][number];
};
export type SegmentNameByCameraByPlace = {
  [P_Place in keyof PlaceInfoByName]: {
    [P_Cam in keyof PlaceInfoByName[P_Place]["segmentTimesByCamera"]]: keyof PlaceInfoByName[P_Place]["segmentTimesByCamera"][P_Cam];
  };
};
export type SegmentNameFromCameraAndPlace<
  T_Place extends keyof PlaceInfoByName,
  T_Cam extends keyof PlaceInfoByName[T_Place]["segmentTimesByCamera"]
> = keyof PlaceInfoByName[T_Place]["segmentTimesByCamera"][T_Cam];
export type AnySegmentName = SegmentNameByPlace[PlaceName];

export type TriggerNameByPlace = {
  [P_PlaceName in PlaceName]: PlaceInfoByName[P_PlaceName]["triggerNames"][number];
};
export type AnyTriggerName = TriggerNameByPlace[PlaceName];

export type WallNameByPlace = {
  [P_PlaceName in PlaceName]: PlaceInfoByName[P_PlaceName]["wallNames"][number];
};
export type AnyWallName = WallNameByPlace[PlaceName];


export const allCameraNames = [
  ...basementInfo.cameraNames,
  ...stairyInfo.cameraNames,
];
