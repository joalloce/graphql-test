const comment = async (_, { id }, { dataSources }) => {
  return dataSources.CommentsService.getComment({ id });
};

export default comment;
