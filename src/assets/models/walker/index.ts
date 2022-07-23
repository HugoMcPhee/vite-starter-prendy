import modelFile from "./walker.glb";

export const animationNames = [
  "walker_idle",
  "walker_walking",
] as const;

export const boneNames = [
  "torso",
  "left_chest",
  "left_arm",
  "left_forearm",
  "left_hand",
  "neck",
  "left_eyebrow",
  "right_eyebrow",
  "right_chest",
  "right_arm",
  "right_forearm",
  "right_hand",
  "left_pelvis",
  "left_thigh",
  "left_leg",
  "right_pelvis",
  "right_thigh",
  "right_leg",
] as const;

export const meshNames = [
  "Walker",
] as const;

export const materialNames = [
  "Material",
] as const;

export const skeletonName = "Walker_Armature" as const;

export type AnimationName = typeof animationNames[number];
export type BoneName = typeof boneNames[number];
export type MeshName = typeof meshNames[number];
export type MaterialNames = typeof materialNames[number];

export type SkeletonName = typeof skeletonName;

export const modelInfo = {
  modelFile,
  animationNames,
  boneNames,
  meshNames,
  materialNames,
  skeletonName,
};
