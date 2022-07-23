import hug from "./hug.png";
import key from "./key.png";

export const pickupsInfo = {
  hug: {
    name: "hug",
    hint: "hug",
    image: hug,
  },
  key: {
    name: "key",
    hint: "key",
    image: key,
  },
};

export type PickupName = keyof typeof pickupsInfo;
