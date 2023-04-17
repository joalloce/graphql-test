const albumsByUserId = async (_, { userId }, { dataSources }) => {
  return dataSources.AlbumsService.getAlbumsByUserId({ userId });
};

export default albumsByUserId;
