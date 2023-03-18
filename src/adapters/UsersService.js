import { RESTDataSource } from "@apollo/datasource-rest";

class UsersService extends RESTDataSource {
  baseURL = "https://jsonplaceholder.typicode.com/";

  async getUsers() {
    return this.get("/users");
  }

  async getUser({ id }) {
    return this.get(`users/${id}`);
  }
}

export default UsersService;
