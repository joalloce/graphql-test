import { RESTDataSource } from "@apollo/datasource-rest";

class AlbumsService extends RESTDataSource {
  baseURL = "https://jsonplaceholder.typicode.com/";

  async getAlbums() {
    return this.get("albums");
  }

  async getAlbum({ id }) {
    return this.get(`albums/${id}`);
  }

  async getAlbumsByUserId({ userId }) {
    return this.get(`users/${userId}/albums`);
  }
}

export default AlbumsService;
