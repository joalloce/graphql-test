import { RESTDataSource } from "@apollo/datasource-rest";

class TodosService extends RESTDataSource {
  baseURL = "https://jsonplaceholder.typicode.com/";

  async getTodos() {
    return this.get("todos");
  }

  async getTodo({ id }) {
    return this.get(`todos/${id}`);
  }

  async getTodosByUserId({ userId }) {
    return this.get(`users/${userId}/todos`);
  }
}

export default TodosService;
