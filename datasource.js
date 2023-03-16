
const { RESTDataSource } = require("apollo-datasource-rest");

class AlbumAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL ="https://jsonplaceholder.typicode.com/photos"
    }


 async getAll() {
    const response = await this.get('/');
    console.log("Called getAll");
    //console.log(response)
    return Array.isArray(response)
      ? response.map(album => this.albumReducer(album))
      : [];}


async getById({ photoId }){
    const response = await this.get('/' , { id: photoId });
    console.log(response)
    //return this.albumReducer(response[0]);
}

albumReducer(album){
    return{
    albumId:album.albumId,
    id:album.id,
    title:album.title,
    url:album.url,
    thumbnailUrl:album.thumbnailUrl,

    };
}

}

module.exports = AlbumAPI;