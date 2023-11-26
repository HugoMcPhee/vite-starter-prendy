import { ModelName, modelNames } from "assets/models/models";
import { DollOptionsLoose, getDefaultDollOptions } from "prendy";

export const dollOptions = {
  ...getDefaultDollOptions(modelNames),
} as const satisfies DollOptionsLoose<ModelName>;

export type DollName = keyof typeof dollOptions;
export const dollNames = Object.keys(dollOptions) as readonly DollName[];
