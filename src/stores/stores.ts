import { PRENDY_ASSETS } from "assets/assets";
import { makePrendyStores, prendyStepNames } from "prendy";
import story from "./story";

export const stores = { story, ...makePrendyStores(PRENDY_ASSETS) };

declare module "repond/src/declarations" {
  interface CustomRepondTypes {
    AllStoreInfo: typeof stores;
    StepNames: typeof prendyStepNames;
  }
}
