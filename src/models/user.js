export const user = {
  state: {
    current: null,
    isLoading: false,
  },
  reducers: {
    setUserReducer(state, { username, password, image }) {
      return { ...state, current: { username, password, image } };
    },
  },
  effects: dispatch => ({
    login({ username, password, image }) {
      dispatch.user.setUserReducer({ username, password, image });
    },
  }),
};
