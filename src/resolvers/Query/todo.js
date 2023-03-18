const todo = async (_, { id }, { dataSources }) => {
  return dataSources.TodosService.getTodo({ id });
};

export default todo;
