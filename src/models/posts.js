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


export const post = {
  state: {
    collection: [],
    isLoading: false,
  },
  reducers: {
    setPostReducer(state, collection) {
      return { ...state, collection };
    },
  },
  effects: dispatch => ({
    async addPost({ title, imgUrl }) {
      const data = await createPost({ title, imgUrl })
      const get = await getPosts()
      dispatch.post.setPostReducer(get);
    },

    async fetchPosts() {
      const data = await getPosts()
      dispatch.post.setPostReducer(data);
    },

    async deletePost(id) {
      const data = await sureDelete(id)
      const get = await getPosts()
      dispatch.post.setPostReducer(get);
    },

    async updatePost({ editId, title, imgUrl }) {
      const data = await sureEdit(editId, title, imgUrl)
      const get = await getPosts()
      dispatch.post.setPostReducer(get);
    },
  }),
};
