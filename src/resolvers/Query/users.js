const users = async (_, __, { dataSources }) => {
  return dataSources.UsersService.getUsers();
};

export default users;
