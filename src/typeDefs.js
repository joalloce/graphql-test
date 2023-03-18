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

  type Query {
    todo(id: ID!): Todo!
    todos: [Todo!]!
    user(id: ID!): User!
    users: [User!]!
  }
`;

export default typeDefs;
