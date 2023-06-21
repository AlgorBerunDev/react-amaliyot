export const image = {
  state: {
    collection: [],
  },
  reducers: {
    setImageReducer(state, { title, url }) {
      return { ...state, collection: [...state.collection, { title, url }] };
    },
  },
  effects: dispatch => ({}),
};
