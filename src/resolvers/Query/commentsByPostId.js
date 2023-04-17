const commentsByPostId = async (_, { postId }, { dataSources }) => {
  return dataSources.CommentsService.getCommentsByPostId({ postId });
};

export default commentsByPostId;
