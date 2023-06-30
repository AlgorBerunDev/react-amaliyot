import { init } from "@rematch/core";
import selectPlugin from "@rematch/select";
import { user } from "./models/user";
import { post } from "./models/posts";

const store = init({
  models: {
    user,
    post
  },
  plugins: [selectPlugin()],
});

export const { select } = store;

export default store;
