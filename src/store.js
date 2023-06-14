import { init } from "@rematch/core";
import selectPlugin from "@rematch/select";
import { user } from "./models/user";

const store = init({
  models: {
    user,
  },
  plugins: [selectPlugin()],
});

export const { select } = store;

export default store;
