
const { gql } = require("apollo-server");

const typeDefs = gql`
  type Album{
    albumId:Int
    id:ID!
    title:String
    url:String
    thumbnailUrl:String
  },
  type Query{
    photos:[Album]!
    photo(id:ID!):Album
  }

`;

module.exports = typeDefs;