
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typedefs");
const resolvers = require("./resolver"); 

const AlbumAPI = require("./datasource");

const server = new ApolloServer({
  typeDefs,
  resolvers, 
  dataSources: () => ({
    AlbumAPI: new AlbumAPI(),
  }),
});
console.log(AlbumAPI);

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
    Explore at https://studio.apollographql.com/sandbox
  `);
});