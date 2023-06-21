import { init } from "@rematch/core";
import selectPlugin from "@rematch/select";
import { user } from "./models/user";
import { posts } from "./models/posts";

const store = init({
  models: {
    user,
    posts
  },
  plugins: [selectPlugin()],
});

export const { select } = store;

export default store;
