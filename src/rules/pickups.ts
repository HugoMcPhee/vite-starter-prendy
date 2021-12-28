import { stylesBySpecialText } from "art/options";
import { PickupName } from "art/pickups";
import { getRefs, onNextTick, setState } from "stores";
import {
  makeOnUsePickupAtTrigger,
  makeOnUsePickupGenerally,
  makeOnUsePickupToTalk,
  showSpeech,
} from "stores/story/utils";

export const onUsePickupAtTrigger = makeOnUsePickupAtTrigger({
  stairy: {
    door_to_basement: {
      async key() {
        // when using the "key" pickup at the "door_to_basement" trigger
      },
    },
  },
});

export const onUsePickupToTalk = makeOnUsePickupToTalk({
  walker: { async hug() {} },
});

export const onUsePickupGenerally = makeOnUsePickupGenerally({
  async key({ storyState: { exampleStoryToggle } }) {
    if (exampleStoryToggle) {
    } else {
    }
    await showSpeech("a big key 🗝️", { stylesBySpecialText });
  },
});

//  NOTE could maybe make this automatic ly combined in libraries/gamey
export function onPickupButtonClick(pickupName: PickupName) {
  setState({ players: { main: { interactButtonPressTime: Date.now() } } });
  const didUsePickupAtTrigger = onUsePickupAtTrigger(pickupName);
  const didUsePickupWithDoll = onUsePickupToTalk(pickupName);

  // NOTE the top two functions can return true if they ran,
  // and if neither returned true, it runs the genral one
  if (!didUsePickupAtTrigger && !didUsePickupWithDoll) {
    onUsePickupGenerally(pickupName);
  }
}

export function makePickupsRules() {
  onNextTick(() => {
    getRefs().global.main.onPickupButtonClick = onPickupButtonClick;
  });
}
