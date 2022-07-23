import { modelInfo as walkerInfo } from "./walker";

export const modelInfoByName = {
  walker: walkerInfo,
};

export type ModelName = keyof typeof modelInfoByName;

export const modelNames = [
  "walker", 
] as const;

type ModelInfoByName = typeof modelInfoByName;

export type AnimationNameByModel = {
  [P_ModelName in ModelName]: ModelInfoByName[P_ModelName]["animationNames"][number];
};
export type AnyAnimationName = AnimationNameByModel[ModelName];

export type BoneNameByModel = {
  [P_ModelName in ModelName]: ModelInfoByName[P_ModelName]["boneNames"][number];
};
export type AnyBoneName = BoneNameByModel[ModelName];

export type MeshNameByModel = {
  [P_ModelName in ModelName]: ModelInfoByName[P_ModelName]["meshNames"][number];
};
export type AnyMeshName = MeshNameByModel[ModelName];

export type MaterialNameByModel = {
  [P_ModelName in ModelName]: ModelInfoByName[P_ModelName]["materialNames"][number];
};
export type AnyMaterialName = MaterialNameByModel[ModelName];

export type SkeletonNameByModel = {
  [P_ModelName in ModelName]: ModelInfoByName[P_ModelName]["skeletonName"];
};
export type AnySkeletonName = SkeletonNameByModel[ModelName];


export const allAnimationNames = [
  ...walkerInfo.animationNames,
];
