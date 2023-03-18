const typeDefs = `#graphql
  type User {
    id: ID!
    name: String!
    username: String!
    email: String!
    phone: String!
    website: String!
  }
  type Todo {
    id: ID!
    user: User!
    title: String!
    completed: Boolean!
  }
  type Album {
    id: ID!
    user: User!
    title: String!
  }
  type Photo {
    id: ID!
    album: Album!
    title: String!
    url: String!
    thumbnailUrl: String!
  }
  type Post {
    id: ID!
    user: User!
    title: String!
    body: String!
  }
  type Comment {
    id: ID!
    post: Post!
    name: String!
    email: String!
    body: String!
  }


  type Query {
    todo(id: ID!): Todo!
    todos: [Todo!]!
    user(id: ID!): User!
    users: [User!]!
    album(id: ID!): Album!
    albums: [Album!]!
    photo(id: ID!): Photo!
    photos: [Photo!]!
    post(id: ID!): Post!
    posts: [Post!]!
    comment(id: ID!): Comment!
    comments: [Comment!]!
  }
`;

export default typeDefs;
