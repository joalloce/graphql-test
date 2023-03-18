import UsersService from "../adapters/UsersService";

const Todo = {
  user: async (todo, _, { dataSources }) => {
    return dataSources.UsersService.getUser({ id: todo.userId });
  },
};

export default Todo;
