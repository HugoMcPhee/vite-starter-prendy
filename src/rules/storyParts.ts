import { getUsefulStoryStuff } from "prendy/src/helpers/prendyRuleMakers/prendyRuleMakers";
import { makeRuleMaker } from "repond";

const makeStoryPartRules = makeRuleMaker("story", "main", "storyPart", "story", getUsefulStoryStuff);

export const storyPartRules = makeStoryPartRules({
  async "00_before_start"() {},
});
