import { initEventTypeGroups } from "repond-events";
import { RepondEventsTypes } from "repond-events/src/declarations";
import { prendyEventGroups } from "prendy";

const allEventGroups = initEventTypeGroups(
  { ...prendyEventGroups },
  { defaultElapsedTimePath: ["global", "main", "elapsedGameTime"] }
);

declare module "repond-events/src/declarations" {
  interface CustomRepondEventsTypes<T_Group, T_Event, T_GenericParamA> {
    EventGroups: typeof allEventGroups;
    KnownChainIds: "mainCardAniChain" | "mainCardOpacityDelayChain" | "miniCardSetAniChain";
    // EventParameters: CustomEventParameters<T_Group, T_Event, T_GenericParamA>;
    EventParameters: never; // use never if there's no custom types to keep default types working
  }
}
