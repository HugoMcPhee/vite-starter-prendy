import { PRENDY_ASSETS } from "assets/assets";
import { PRENDY_OPTIONS } from "assets/options";
import { prendyStepNames, makePrendyStores } from "prendy";
import { StoreHelperTypes, createStoreHelpers } from "pietem";
import story from "./story/story";

export const stores = {
  story,
  ...makePrendyStores(PRENDY_OPTIONS, PRENDY_ASSETS),
};

export const storeHelpers = createStoreHelpers(stores, {
  stepNames: prendyStepNames,
  framerate: "auto",
});
export const {
  setState,
  getState,
  getPreviousState,
  onNextTick,
  getRefs,
  getItem,
  useStore,
  useStoreItem,
  useStoreEffect,
  useStoreItemEffect,
  useStoreItemPropsEffect,
  makeRules,
  makeDynamicRules,
  startEffect,
  startItemEffect,
  stopEffect,
  addItem,
  removeItem,
} = storeHelpers;

export type ItemType = keyof ReturnType<typeof getState>;

type HelperType<T extends ItemType> = StoreHelperTypes<typeof getState, typeof getRefs, T>;

export type AllItemsState<T extends ItemType> = HelperType<T>["AllItemsState"];
export type ItemState<T extends ItemType> = HelperType<T>["ItemState"];
export type ItemRefs<T extends ItemType> = HelperType<T>["ItemRefs"];
