import { GraphQLSchema } from "graphql";
import rootQuery from "./rootQuery.js";
import rootMutation from "./rootMutation.js";

const schema = new GraphQLSchema({ query: rootQuery, mutation: rootMutation });

export default schema;
