const photos = async (_, __, { dataSources }) => {
  return dataSources.PhotosService.getPhotos();
};

export default photos;
