import { gql } from "apollo-server-core";

export const UserType = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
    createdAt: String
    updatedAt: String
  }

  type Query {
    users: [User!]!
    user(email: String!): User!
    verifyAuthToken(token: String!): Boolean
    signOut: Boolean

  }

  type Mutation {
    createUser(firstName: String!, lastName: String!, email: String!, password: String!): User!
    signIn(email: String!, password: String!): User!
    updateUser(firstName: String, lastName: String, email: String, password: String, id: ID!): Boolean
    deleteUser(id: ID!): Boolean
  }
`;
