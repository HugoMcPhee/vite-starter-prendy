import { PRENDY_ART } from "art";
import { PRENDY_OPTIONS, fontNames } from "art/options";
import { storeHelpers, stores } from "stores";
import { makeStartPrendyRules } from "prendy";
import { useEffect } from "react";
import { startAllOtherStoryRules, storyRules } from "rules";

const startPrendyRules = makeStartPrendyRules<typeof storeHelpers, typeof stores>(
  storeHelpers,
  stores,
  PRENDY_OPTIONS,
  PRENDY_ART
);

export function startRules() {
  const stopPrendyRules = startPrendyRules(fontNames);
  storyRules.startAll();
  const stopAllOtherStoryRules = startAllOtherStoryRules();

  return function stopRules() {
    stopPrendyRules();
    storyRules.stopAll();
    stopAllOtherStoryRules();
  };
}

export default function StartAndStopRules() {
  useEffect(startRules);

  return null;
}
