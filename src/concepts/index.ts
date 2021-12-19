import { PRENDY_ART } from "art";
import { PRENDY_OPTIONS } from "art/options";
import { prendyFlowNames, makePrendyConcepts } from "prendy";
import { ConceptsHelperTypes, createConcepts } from "concep";
import story from "./story";

export const allConcepts = {
  story,
  ...makePrendyConcepts(PRENDY_OPTIONS, PRENDY_ART),
};

export const allConcepFuncs = createConcepts(allConcepts, {
  flowNames: prendyFlowNames,
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
} = allConcepFuncs;

export type ItemType = keyof ReturnType<typeof getState>;

type HelperType<T extends ItemType> = ConceptsHelperTypes<
  typeof getState,
  typeof getRefs,
  T
>;

export type AllItemsState<T extends ItemType> = HelperType<T>["AllItemsState"];
export type ItemState<T extends ItemType> = HelperType<T>["ItemState"];
export type ItemRefs<T extends ItemType> = HelperType<T>["ItemRefs"];
