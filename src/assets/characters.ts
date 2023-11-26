import { DollName } from "assets/dolls";
import { CharacterOptionLoose } from "prendy";
import { FontName } from "./fonts";

export const characterOptions = {
  walker: { doll: "walker", font: "Jua" },
} as const satisfies CharacterOptionLoose<DollName, FontName>;

export type CharacterName = keyof typeof characterOptions;
export const characterNames = Object.keys(characterOptions) as CharacterName[];
