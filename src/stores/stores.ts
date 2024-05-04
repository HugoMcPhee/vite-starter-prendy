import { PRENDY_ASSETS } from "assets/assets";
import { makePrendyStores, prendyStepNames } from "prendy";
import story from "./story";
import { repondEventsStores } from "repond-events";

export const stores = { story, ...repondEventsStores, ...makePrendyStores(PRENDY_ASSETS) };

declare module "repond/src/declarations" {
  interface CustomRepondTypes {
    AllStoreInfo: typeof stores;
    StepNames: typeof prendyStepNames;
  }
}
