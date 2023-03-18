const Comment = {
  post: async (comment, _, { dataSources }) => {
    return dataSources.PostsService.getPost({ id: comment.postId });
  },
};

export default Comment;
