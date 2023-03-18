const albums = async (_, __, { dataSources }) => {
  return dataSources.AlbumsService.getAlbums();
};

export default albums;
