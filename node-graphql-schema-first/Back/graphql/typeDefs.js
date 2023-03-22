import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Dummy {
    id: ID!
    title: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    dummies: [Dummy!]!
    dummy(id: ID!): Dummy!
  }

  type Mutation {
    createDummy(title: String!): Dummy!
    updateDummy(title: String!, id: ID!): Boolean
    deleteDummy(id: ID!): Boolean
  }
`;
