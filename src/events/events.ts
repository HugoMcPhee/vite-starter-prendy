import { focusOnDoll, showMiniBubble, showSpeech } from "prendy";

export function makeNodes() {}

export function makeNode<T_NodeType extends NodeType>(
  nodeType: T_NodeType,
  valueParam: ParamType<T_NodeType>,
  nodeId: string
) {}

type CoreNodeType = "event" | "value" | "rule";

type NodeStuff = {
  liveState: string;
  lifecycle: string;
  id: string;
  // finishNode: () => void,
};

type NodeProgressType = "async" | "manual";

export type NodeDefinitionLoose = {
  name: string;
  coreType: CoreNodeType;
  handler: (param: any, nodeStuff: NodeStuff) => void | any;
  progressType: NodeProgressType;
};

const nodeDefinitions = {
  showSpeech: {
    name: "showSpeech",
    coreType: "event",
    handler: async (
      { text, ...otherOptions }: { text: Parameters<typeof showSpeech>[0] } & Parameters<typeof showSpeech>[1],
      nodeStuff: NodeStuff
    ) => {
      const { id } = nodeStuff;
      await showSpeech(text, otherOptions);
    },
    progressType: "async",
  },
  showMiniBubble: {
    name: "showMiniBubble",
    coreType: "event",
    progressType: "async",
    handler: async (
      { text, time }: { text: Parameters<typeof showMiniBubble>[0]; time: Parameters<typeof showMiniBubble>[1] },
      nodeStuff: NodeStuff
    ) => {
      const { id } = nodeStuff;
      await showMiniBubble(text, time);
    },
  },
  focusOnDoll: {
    name: "focusOnDoll",
    coreType: "event",
    progressType: "async",
    handler: async (
      { dollName, time }: { dollName: Parameters<typeof focusOnDoll>[0]; time: Parameters<typeof focusOnDoll>[1] },
      nodeStuff: NodeStuff
    ) => {
      const { id } = nodeStuff;
      await focusOnDoll(dollName, time);
    },
  },
} as const satisfies Record<string, NodeDefinitionLoose>;

export type NodeType = keyof typeof nodeDefinitions;

export type ParamType<T_NodeType extends NodeType> = Parameters<(typeof nodeDefinitions)[T_NodeType]["handler"]>[0];

export type DefinedNode<T_NodeType extends NodeType> = {
  type: T_NodeType;
  coreType: CoreNodeType;
  param: ParamType<T_NodeType>;
  id: string;
};
