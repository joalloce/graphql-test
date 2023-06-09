import { RESTDataSource } from "@apollo/datasource-rest";

class PhotosService extends RESTDataSource {
  baseURL = "https://jsonplaceholder.typicode.com/";

  async getPhotos() {
    return this.get("photos");
  }

  async getPhoto({ id }) {
    return this.get(`photos/${id}`);
  }

  async getPhotosByAlbumId({ albumId }) {
    return this.get(`albums/${albumId}/photos`);
  }
}

export default PhotosService;
