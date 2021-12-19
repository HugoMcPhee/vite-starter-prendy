import { PRENDY_ART } from "art";
import { PRENDY_OPTIONS, fontNames } from "art/options";
import { allConcepFuncs, allConcepts } from "concepts";
import { makeStartPrendyRules } from "prendy";
import { useEffect } from "react";
import { startAllOtherStoryRules, storyRules } from "./story/rules";

const startPrendyRules = makeStartPrendyRules<
  typeof allConcepFuncs,
  typeof allConcepts
>(allConcepFuncs, allConcepts, PRENDY_OPTIONS, PRENDY_ART);

export function startConcepts() {
  const stopPrendyConcepts = startPrendyRules(fontNames);
  storyRules.startAll();
  const stopAllOtherStoryRules = startAllOtherStoryRules();

  return function stopConcepts() {
    stopPrendyConcepts();
    storyRules.stopAll();
    stopAllOtherStoryRules();
  };
}

export default function StartAndStopConcepts() {
  useEffect(startConcepts);

  return null;
}
