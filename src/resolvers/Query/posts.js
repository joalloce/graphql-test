const posts = async (_, __, { dataSources }) => {
  return dataSources.PostsService.getPosts();
};

export default posts;
