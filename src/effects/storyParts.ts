import { getUsefulStoryStuff } from "prendy/src/helpers/prendyRuleMakers/prendyRuleMakers";
import { makeEffectsMaker } from "repond";

const makeStoryPartEffects = makeEffectsMaker("story", "main", "storyPart", "story", getUsefulStoryStuff);

export const storyPartEffects = makeStoryPartEffects({
  async "00_before_start"() {},
});
