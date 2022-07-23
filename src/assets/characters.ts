import { DollName } from "assets/dolls";
import { FontName } from "assets/options";

// type CharacterOption = { model: ModelName; font: FontName };

// function so characterOptions can have autocomplete and still have an inferrable type
function add<T_Doll extends DollName, T_Font extends FontName>(options: { doll: T_Doll; font: T_Font }) {
  return options;
}

// maybe a json schema and json thing instead? so the files all static?

export const characterOptions = {
  walker: add({ doll: "walker", font: "Jua" }),
} as const;

export type CharacterName = keyof typeof characterOptions;

export const characterNames = Object.keys(characterOptions) as CharacterName[];
