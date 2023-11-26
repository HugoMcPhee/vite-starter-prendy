import { makeRuleMaker, prendy } from "stores/stores";
const {
  utils: { getUsefulStoryStuff },
} = prendy;

const makeStoryPartRules = makeRuleMaker("story", "main", "storyPart", "story", getUsefulStoryStuff);

export const storyPartRules = makeStoryPartRules({
  async "00_before_start"() {},
});
