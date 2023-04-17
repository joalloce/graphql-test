const photosByAlbumId = async (_, { albumId }, { dataSources }) => {
  return dataSources.PhotosService.getPhotosByAlbumId({ albumId });
};

export default photosByAlbumId;
