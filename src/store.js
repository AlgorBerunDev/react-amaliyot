import { init } from "@rematch/core";
import { count } from "./models/count";
import selectPlugin from "@rematch/select";

const store = init({ models: { count }, plugins: [selectPlugin()] });

export const { select } = store;

export default store;
