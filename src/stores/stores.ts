import { PRENDY_ASSETS } from "assets/assets";
import { makePrendyHelpers, makePrendyStores, prendyStepNames } from "prendy";
import { createStoreHelpers } from "repond";
import story from "./story";

export const stores = { story, ...makePrendyStores(PRENDY_ASSETS) };
export const storeHelpers = createStoreHelpers(stores, { stepNames: prendyStepNames });
export const { setState, getState, getRefs, makeRules, makeRuleMaker } = storeHelpers;

export const prendy = makePrendyHelpers(PRENDY_ASSETS, stores, storeHelpers);

export const {
  story: {
    speech: { showMiniBubble, hideMiniBubble },
  },
} = prendy;
