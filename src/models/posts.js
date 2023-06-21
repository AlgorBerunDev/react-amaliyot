export const posts = {
    state: {
      current: [],
      isLoading: false,
    },
    reducers: {
      setUserReducer(state, { title, file }) {
        return { ...state, current: [...state.current, { title, file }] };
      },
    },
    effects: dispatch => ({
      add({ title, file }) {
        dispatch.posts.setUserReducer({ title, file });
      },
    }),
  };
  