import { StoryPartName } from "stores/story";
import { CharacterName, characterNames, characterOptions } from "./characters";
import { DollName, dollNames, dollOptions } from "./dolls";
import {
  AnimationNameByModel,
  AnyAnimationName,
  BoneNameByModel,
  MaterialNameByModel,
  MeshNameByModel,
  ModelName,
  modelInfoByName,
  modelNames,
} from "./models/models";
import { MusicName, musicFiles, musicNames } from "./music/music";
import { PRENDY_OPTIONS } from "./options";
import { PickupName, pickupsInfo } from "./pickups/pickups";
import {
  AnyCameraName,
  AnySegmentName,
  AnySpotName,
  AnyTriggerName,
  CameraNameByPlace,
  PlaceName,
  SegmentNameByPlace,
  SoundspotNameByPlace,
  SpotNameByPlace,
  TriggerNameByPlace,
  WallNameByPlace,
  placeInfoByName,
  placeNames,
} from "./places/places";
import { SoundName, soundFiles, soundNames } from "./sounds/sounds";
import { SpeechVidName, speechVidFiles } from "./speechvids/speechvids";
import { FontName, fontNames } from "./fonts";

export const PRENDY_ASSETS = {
  placeInfoByName,
  modelInfoByName,
  dollOptions,
  characterOptions,
  placeNames,
  modelNames,
  dollNames,
  characterNames,
  musicNames,
  soundNames,
  fontNames,
  pickupsInfo,
  musicFiles,
  soundFiles,
  speechVidFiles,
  prendyOptions: PRENDY_OPTIONS,
} as const;

export type LocalAssetsTypes = {
  PrendyOptions: typeof PRENDY_OPTIONS;
  PlaceInfoByName: typeof placeInfoByName;
  ModelInfoByName: typeof modelInfoByName;
  DollOptions: typeof dollOptions;
  CharacterOptions: typeof characterOptions;
  ModelName: ModelName;
  DollName: DollName;
  CharacterName: CharacterName;
  AnyCameraName: AnyCameraName;
  AnySegmentName: AnySegmentName;
  AnySpotName: AnySpotName;
  AnyTriggerName: AnyTriggerName;
  PlaceName: PlaceName;
  PickupName: PickupName;
  AnyAnimationName: AnyAnimationName;
  SoundName: SoundName;
  MusicName: MusicName;
  FontName: FontName;
  SpeechVidName: SpeechVidName;
  StoryPartName: StoryPartName;
  CameraNameByPlace: CameraNameByPlace;
  SoundspotNameByPlace: SoundspotNameByPlace;
  SpotNameByPlace: SpotNameByPlace;
  TriggerNameByPlace: TriggerNameByPlace;
  WallNameByPlace: WallNameByPlace;
  AnimationNameByModel: AnimationNameByModel;
  BoneNameByModel: BoneNameByModel;
  MaterialNameByModel: MaterialNameByModel;
  MeshNameByModel: MeshNameByModel;
  ModelNamesByPlaceLoose: Record<PlaceName, ModelName[]>;
  SegmentNameByPlace: SegmentNameByPlace;
  MusicFiles: typeof musicFiles;
  SpeechVidFiles: typeof speechVidFiles;
  SoundFiles: typeof soundFiles;
  PickupsInfo: typeof pickupsInfo;
};

declare module "prendy" {
  interface CustomAssetsTypes extends LocalAssetsTypes {}
}
