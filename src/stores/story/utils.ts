import { PRENDY_ASSETS } from "assets/assets";
import { characterNames } from "assets/characters";
import { dollNames } from "assets/dolls";
import { PRENDY_OPTIONS } from "assets/options";
import { placeInfoByName } from "assets/places/places";
import { storeHelpers, stores } from "stores/stores";
import {
  makeAllStoryRuleMakers,
  makePrendyStoryHelpers,
  makeOtherUsefulPrendyUtils,
  makePrendyStoryUtils,
} from "prendy";

export const {
  // characters
  lookAtEachother,
  lookAtOtherCharacter,
  moveCharacterAt2DAngle,
  setCharAnimation,
  setCharPosition,
  setCharRotationY,
  springAddToCharRotationY,
  springCharRotation,
  // dolls
  focusOnDoll,
  hideDoll,
  moveDollAt2DAngle,
  setDollAnimation,
  setDollPosition,
  setDollRotation,
  setDollRotationY,
  setDollToSpot,
  springAddToDollRotationY,
  springDollRotationY,
  springDollToSpot,
  toggleDollMeshes,
  //players
  enableMovement,
  isHolding,
  setPlayerAnimations,
  takePickup,
  // scene
  goToNewPlace,
  hideWallIf,
  lookAtSpot,
  showStoryView,
  setCamera,
  setSegment,
  // sound
  playNewMusic,
  stopAllMusic,
  // speech
  hideMiniBubble,
  showAlarmText,
  showMiniBubble,
  showSpeech,
  // stickers
  hideSticker,
  moveSticker,
  showSticker,
} = makePrendyStoryHelpers<typeof storeHelpers, typeof stores>(storeHelpers, stores, PRENDY_OPTIONS, PRENDY_ASSETS);

export const { getEngine, getScene, getGlobalState, setGlobalState, setStoryState } =
  makeOtherUsefulPrendyUtils(storeHelpers);

export const { get2DAngleBetweenCharacters } = makePrendyStoryUtils(storeHelpers, stores);

export const {
  makeCamChangeRules,
  makeCamLeaveRules,
  makeCamSegmentRules,
  makeOnInteractAtTrigger,
  makeOnInteractToTalk,
  makeOnUsePickupAtTrigger,
  makeOnUsePickupGenerally,
  makeOnUsePickupToTalk,
  makePlaceLoadRules,
  makePlaceNotLoadedRules,
  makeStoryPartRules,
  makeTouchRules,
  makeTriggerRules,
} = makeAllStoryRuleMakers<typeof storeHelpers>(storeHelpers, placeInfoByName, characterNames, dollNames);
