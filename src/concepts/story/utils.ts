import { PRENDY_ART } from "art";
import { characterNames } from "art/characters";
import { dollNames } from "art/dolls";
import { PRENDY_OPTIONS } from "art/options";
import { placeInfoByName } from "art/places";
import { allConcepFuncs, allConcepts } from "concepts";
import {
  makeAllStoryRuleMakers,
  makePrendyStoryHelpers,
  makeOtherUsefulPrendyUtils,
} from "prendy";
import { makePrendyStoryUtils } from "prendy/dist/utils/story/utils";

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
} = makePrendyStoryHelpers<typeof allConcepFuncs, typeof allConcepts>(
  allConcepFuncs,
  allConcepts,
  PRENDY_OPTIONS,
  PRENDY_ART
);

export const {
  getEngine,
  getScene,
  getGlobalState,
  setGlobalState,
  setStoryState,
} = makeOtherUsefulPrendyUtils(allConcepFuncs);

export const { get2DAngleBetweenCharacters } = makePrendyStoryUtils(
  allConcepFuncs,
  allConcepts
);

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
} = makeAllStoryRuleMakers<typeof allConcepFuncs>(
  allConcepFuncs,
  placeInfoByName,
  characterNames,
  dollNames
);
