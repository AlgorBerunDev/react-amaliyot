export const user = {
  state: {
    current: null,
    isLoading: false,
  },
  reducers: {
    setUserReducer(state, { username, password }) {
      return { ...state, current: { username, password } };
    },
  },
  effects: dispatch => ({
    login({ username, password }) {
      dispatch.user.setUserReducer({ username, password });
    },
  }),
};
