import crickets from "./crickets.mp3";

export const soundFiles = {
  crickets,
};

export type SoundName = keyof typeof soundFiles;
export const soundNames = Object.keys(soundFiles) as SoundName[];
