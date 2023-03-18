import { RESTDataSource } from "@apollo/datasource-rest";

class CommentsService extends RESTDataSource {
  baseURL = "https://jsonplaceholder.typicode.com/";

  async getComments() {
    return this.get("comments");
  }

  async getComment({ id }) {
    return this.get(`comments/${id}`);
  }
}

export default CommentsService;
