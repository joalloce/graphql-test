import { RESTDataSource } from "@apollo/datasource-rest";

class PostsService extends RESTDataSource {
  baseURL = "https://jsonplaceholder.typicode.com/";

  async getPosts() {
    return this.get("posts");
  }

  async getPost({ id }) {
    return this.get(`posts/${id}`);
  }

  async getPostsByUserId({ userId }) {
    return this.get(`users/${userId}/posts`);
  }
}

export default PostsService;
