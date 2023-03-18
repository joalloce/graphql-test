const Photo = {
  album: async (photo, _, { dataSources }) => {
    return dataSources.AlbumsService.getAlbum({ id: photo.albumId });
  },
};

export default Photo;
