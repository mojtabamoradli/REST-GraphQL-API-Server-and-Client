import { GraphQLInt, GraphQLString, GraphQLBoolean, GraphQLObjectType } from "graphql";

const dummiesType = new GraphQLObjectType({
  name: "Dummies",
  description: "Dummy Data",
  fields: {
    id: {
      type: GraphQLInt,
    },
    dummy: {
      type: GraphQLString,
    },
  },
});

export default dummiesType;
