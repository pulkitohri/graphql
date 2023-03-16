const AlbumAPI = require("./datasource").AlbumAPI;


module.exports = {
    Query: {
        photos: (_, __, { dataSources }) =>
        dataSources.AlbumAPI.getAll(),
            //console.log("ALBUM API", ctx)
            //console.log("ALBUM API", a)
            //console.log("ALBUM API", b)
            //console.log("ALBUM API", info)
        
        photo:(_,{ pid },{ dataSources }) =>
        dataSources.AlbumAPI.getById({ photoId: pid }),
    },
    
    };
    
