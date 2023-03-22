import { GraphQLObjectType, GraphQLList } from "graphql";
import dummiesType from "./schema/dummyModel.js";
import dummies from "./data/dummies.js";

const rootQuery = new GraphQLObjectType({
  name: "rootQuery",
  description: "GraphQL Root Query",
  fields: {
    dummies: {
      type: GraphQLList(dummiesType),
      resolve: () => dummies,
    },
  },
});

export default rootQuery;
