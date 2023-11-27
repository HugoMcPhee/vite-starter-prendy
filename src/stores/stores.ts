import { PRENDY_ASSETS } from "assets/assets";
import { makePrendy, makePrendyStores, prendyStepNames } from "prendy";
import { createStoreHelpers } from "repond";
import story from "./story";

// export {
//   makeCamChangeRules,
//   makeCamLeaveRules,
//   makeCamSegmentRules,
//   makeInteractButtonRules,
//   makeOnInteractAtTrigger,
//   makeOnInteractToTalk,
//   makeOnUsePickupAtTrigger,
//   makeOnUsePickupGenerally,
//   makeOnUsePickupToTalk,
//   makePickupsRules,
//   makePlaceLoadRules,
//   makePlaceUnloadRules,
//   makeTouchRules,
//   makeTriggerRules,
// } from "prendy";

export const stores = { story, ...makePrendyStores(PRENDY_ASSETS) };
export const storeHelpers = createStoreHelpers(stores, { stepNames: prendyStepNames });
export const { setState, getState, getRefs, makeRules, makeRuleMaker } = storeHelpers;
makePrendy(PRENDY_ASSETS, stores, storeHelpers);
