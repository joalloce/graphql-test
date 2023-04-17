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
    todosByUserId(userId: ID!): [Todo]
    user(id: ID!): User!
    users: [User!]!
    album(id: ID!): Album!
    albums: [Album!]!
    albumsByUserId(userId: ID!): [Album]
    photo(id: ID!): Photo!
    photos: [Photo!]!
    photosByAlbumId(albumId: ID!): [Photo]
    post(id: ID!): Post!
    posts: [Post!]!
    postsByUserId(userId: ID!): [Post]
    comment(id: ID!): Comment!
    comments: [Comment!]!
    commentsByPostId(postId: ID!): [Comment]
  }
`;

export default typeDefs;
