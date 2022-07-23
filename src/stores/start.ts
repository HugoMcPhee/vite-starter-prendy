import { PRENDY_ASSETS } from "assets/assets";
import { PRENDY_OPTIONS, fontNames } from "assets/options";
import { storeHelpers, stores } from "stores/stores";
import { makeStartPrendyRules } from "prendy";
import { useEffect } from "react";
import { startAllOtherStoryRules, storyRules } from "rules/rules";

const startPrendyRules = makeStartPrendyRules<typeof storeHelpers, typeof stores>(
  storeHelpers,
  stores,
  PRENDY_OPTIONS,
  PRENDY_ASSETS
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
