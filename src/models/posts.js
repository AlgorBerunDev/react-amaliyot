import PostManager from "../repositories/PostManager";



const getPosts = async () => {
  const data = await PostManager.getPosts()
  return data;
}

const createPost = async (post) => {
  const data = await PostManager.createPost(post)
}

const sureDelete = (id) => {
  PostManager.deletePost(id)
}

const sureEdit = async (editId, title, imgUrl) => {
  await PostManager.editPost({ editId, title, imgUrl })
}


export const posts = {
  state: {
    current: [],
    isLoading: false,
  },
  reducers: {
    setUserReducer(state, data) {
      return { ...state, current: data };
    },
  },
  effects: dispatch => ({
    async add({ title, imgUrl }) {
      const data = await createPost({ title, imgUrl })
      const get = await getPosts()
      dispatch.posts.setUserReducer(get);
    },

    async get() {
      const data = await getPosts()
      dispatch.posts.setUserReducer(data);
    },

    async delete(id) {
      const data = await sureDelete(id)
      const get = await getPosts()
      dispatch.posts.setUserReducer(get);
    },

    async edit({ editId, title, imgUrl }) {
      const data = await sureEdit(editId, title, imgUrl)
      const get = await getPosts()
      dispatch.posts.setUserReducer(get);
    },
  }),
};
