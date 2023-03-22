import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "../graphql/rootSchema.js";
import cors from "cors";

const graphqlRouter = express.Router();

graphqlRouter.use(
  "/graphql",
  cors(),
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

export default graphqlRouter;
