const user = async (_, { id }, { dataSources }) => {
  return dataSources.UsersService.getUser({ id });
};

export default user;
