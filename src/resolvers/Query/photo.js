const photo = async (_, { id }, { dataSources }) => {
  return dataSources.PhotosService.getPhoto({ id });
};

export default photo;
