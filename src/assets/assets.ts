import { storeHelpers, stores } from "stores/stores";
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
import { FontName, PRENDY_OPTIONS, fontNames } from "./options";
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
  // startOptions
};

type ModelNamesByPlaceLoose = Record<PlaceName, ModelName[]>;

type PlaceInfoByName = typeof placeInfoByName;
type ModelInfoByName = typeof modelInfoByName;
type DollOptions = typeof dollOptions;
type CharacterOptions = typeof characterOptions;
type MusicFiles = typeof musicFiles;
type SpeechVidFiles = typeof speechVidFiles;
type SoundFiles = typeof soundFiles;
type PickupsInfo = typeof pickupsInfo;

type PrendyOptions = typeof PRENDY_OPTIONS;

export type LocalAssetsTypes = {
  PrendyOptions: PrendyOptions;
  PlaceInfoByName: PlaceInfoByName;
  ModelInfoByName: ModelInfoByName;
  DollOptions: DollOptions;
  CharacterOptions: CharacterOptions;
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
  ModelNamesByPlaceLoose: ModelNamesByPlaceLoose;
  SegmentNameByPlace: SegmentNameByPlace;
  MusicFiles: MusicFiles;
  SpeechVidFiles: SpeechVidFiles;
  SoundFiles: SoundFiles;
  PickupsInfo: PickupsInfo;
};

type LocalStoreHelpers = typeof storeHelpers;
type LocalStores = typeof stores;

declare module "prendy" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface CustomAssetsTypes extends LocalAssetsTypes {}
  interface CustomStoreHelpers extends LocalStoreHelpers {}
  interface CustomPrendyStores extends LocalStores {}
}
