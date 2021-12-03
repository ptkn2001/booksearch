const { gql } = require('apollo-server-express');

const typeDefs = gql`
type bookSchema {
  _id: ID
  authors: String
  description: String!
  bookId: String!
  image: String
  link: String
  title: String
}

  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

   type Auth {
    token: ID!
    user: User
  }

  type Query {
    user(username: String!): Auth
    users: [User]
  }

  type Mutation {
    addUser(
      userName: String!
      email: String!
      password: String!
    ): Auth
    login(email: String!, password: String!): Auth

  }
`;

module.exports = typeDefs;