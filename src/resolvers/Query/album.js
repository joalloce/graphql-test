const album = async (_, { id }, { dataSources }) => {
  return dataSources.AlbumsService.getAlbum({ id });
};

export default album;
