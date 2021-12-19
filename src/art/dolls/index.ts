import { ModelName, modelNames } from "art/models";

// function so dollOptions can have autocomplete and still have an inferrable type
function add<T_Model extends ModelName>(options: { model: T_Model }) {
  return options;
}

function makeDefaultDollOptionsFromModels() {
  return modelNames.reduce(
    (options, modelName) => (
      (options[modelName] = add({ model: modelName })), options
    ),
    {} as Record<ModelName, { model: ModelName }>
  );
}

export const dollOptions = {
  ...makeDefaultDollOptionsFromModels(),
} as const;

export type DollName = keyof typeof dollOptions;
export const dollNames = Object.keys(dollOptions) as readonly DollName[];
