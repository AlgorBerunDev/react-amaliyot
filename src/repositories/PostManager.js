import client, { baseDomain } from ".";

class PostManager {
    getPosts() {
        const endPoint = `/posts`;

        const posts = client.get(baseDomain + endPoint)
            .then((res) => {
                return res.data
            })
            .catch(err => err)

        return posts
    }

    createPost({ title, imgUrl }) {
        const endPoint = `/posts`;

        const posts = client.post(baseDomain + endPoint, { title, imgUrl }).then(res => res.data).catch(err => err)

        return posts
    }

    deletePost(id) {
        const endPoint = `/posts/` + id;

        const posts = client.delete(baseDomain + endPoint).then(res => res.data).catch(err => err)

        return posts
    }

    getOnePost(id) {
        const endPoint = `/posts/` + id;

        const post = client.get(baseDomain + endPoint)
            .then((res) => {
                return res.data
            })
            .catch(err => err)

        return post
    }

    editPost({ editId, title, imgUrl }) {
        const endPoint = `/posts/` + editId;

        const posts = client.put(baseDomain + endPoint, { title, imgUrl }).then(res => res.data).catch(err => err)

        return posts
    }

}

export default new PostManager()