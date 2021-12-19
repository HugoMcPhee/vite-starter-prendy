import flying_stork from "./flying_stork.mp4";
// import flipped_test from "./flipped_test.mp4";
// import bath from "./bath.mp4";
// import boat from "./boat.mp4";
// import door from "./door.mp4";
// import fire from "./fire.mp4";
// import hello from "./hello.mp4";
// import window from "./window.mp4";

export const speechVidFiles = {
  flying_stork,
  // flipped_test,
  // bath,
  // boat,
  // door,
  // fire,
  // hello,
  // window,
};

export type SpeechVidName = keyof typeof speechVidFiles;

export const speechVidNames = Object.keys(speechVidFiles) as SpeechVidName[];
