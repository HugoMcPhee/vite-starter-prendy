import { PRENDY_ASSETS } from "assets/assets";
import { makePrendy, makePrendyStores, prendyStepNames } from "prendy";
import { makeRepond } from "repond";
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

declare module "repond/src/declarations" {
  interface CustomRepondTypes {
    AllStoreInfo: typeof stores;
    StepNames: typeof prendyStepNames;
  }
}
export const storeHelpers = makeRepond(stores, { stepNames: prendyStepNames });
// export const { setState, getState, getRefs, makeRules, makeRuleMaker } = storeHelpers;
makePrendy(PRENDY_ASSETS, stores);

// makeRules(({ effect }) => ({
//   exampleRule: effect({
//     run: () => console.log("exampleRule"),
//     check: { type: "global", name: "main", prop: ["debugMessage"] },
//     step: "cameraChange",
//   }),
// }));

// setState({ characters: { walker: { atCamCubes: { downstair_camera: "true" } } } });
