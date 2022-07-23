import clock from "./clock.mp3";

export const musicFiles = {
  clock,
};

export type MusicName = keyof typeof musicFiles;

export const musicNames = Object.keys(musicFiles) as MusicName[];
