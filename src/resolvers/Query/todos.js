import TodosService from "../../adapters/TodosService";

const todos = async (_, __, { dataSources }) => {
  return dataSources.TodosService.getTodos();
};

export default todos;
