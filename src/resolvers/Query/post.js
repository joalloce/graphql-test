const post = async (_, { id }, { dataSources }) => {
  return dataSources.PostsService.getPost({ id });
};

export default post;
