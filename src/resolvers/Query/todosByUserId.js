const todosByUserId = async (_, { userId }, { dataSources }) => {
  return dataSources.TodosService.getTodosByUserId({ userId });
};

export default todosByUserId;
