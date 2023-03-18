const Post = {
  user: async (todo, _, { dataSources }) => {
    return dataSources.UsersService.getUser({ id: todo.userId });
  },
};

export default Post;
