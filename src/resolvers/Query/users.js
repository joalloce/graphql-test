import UsersService from "../../adapters/UsersService";

const users = async (_, __, { dataSources }) => {
  return dataSources.UsersService.getUsers();
};

export default users;
