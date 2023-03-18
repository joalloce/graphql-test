const comments = async (_, __, { dataSources }) => {
  return dataSources.CommentsService.getComments();
};

export default comments;
