import { init } from "@rematch/core";
import selectPlugin from "@rematch/select";
import { user } from "./models/user";
import { image } from "./models/image";

const store = init({
  models: {
    user,
    image,
  },
  plugins: [selectPlugin()],
});

export const { select } = store;

export default store;
