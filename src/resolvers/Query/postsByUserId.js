const postsByUserId = async (_, { userId }, { dataSources }) => {
  return dataSources.PostsService.getPostsByUserId({ userId });
};

export default postsByUserId;
