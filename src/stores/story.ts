export const storyPartNames = ["00_before_start"] as const;
export type StoryPartName = (typeof storyPartNames)[number];

const getDefaultState = () => ({
  screenStickerIsVisible: false,
  screenStickerText: "🎵",
  screenStickerPosition: { x: 0.7, y: 0.3 },
  // to know what to start with when a place loads
  chapterName: "exampleChapter" as "exampleChapter" | "anotherChapter",
  storyPart: "00_before_start" as StoryPartName, // to know which part of the chapter is happening
  //
  exampleStoryToggle: false,
});

const getDefaultRefs = () => ({});

// const startStates: InitialItemsState<typeof state> = {
const startStates = { main: getDefaultState() };

const story = { startStates, getDefaultState, getDefaultRefs };
export default story;
