import { GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import dummiesType from "./schema/dummyModel.js";
import dummies from "./data/dummies.js";

const rootMutation = new GraphQLObjectType({
  name: "rootMutation",
  description: "GraphQL Root Mutation",
  fields: {
    addData: {
      type: dummiesType,
      args: { dummy: { type: GraphQLString } },
      resolve: (_, { dummy }) => {
        const newDummies = { id: dummies.length + 1, dummy: dummy };
        dummies.push(newDummies);
        return newDummies;
      },
    },
    updateData: {
      type: dummiesType,
      args: { id: { type: GraphQLInt }, dummy: { type: GraphQLString } },
      resolve: (_, { id, dummy }) => {
        const dummyToUpdate = dummies.find((item) => item.id === id);
        const dummyToUpdateIndex = dummies.indexOf(dummyToUpdate);
        dummies.splice(dummyToUpdateIndex, 1);

        const newDummies = { id: id, dummy: dummy };
        dummies.push(newDummies);
        return newDummies;
      },
    },
    deleteData: {
      type: GraphQLList(dummiesType),
      args: { id: { type: GraphQLInt } },
      resolve: (_, { id }) => {
        const dummyToDelete = dummies.find((item) => item.id === id);
        const dummyToDeleteIndex = dummies.indexOf(dummyToDelete);
        dummies.splice(dummyToDeleteIndex, 1);
        return dummies;
      },
    },
  },
});

export default rootMutation;
