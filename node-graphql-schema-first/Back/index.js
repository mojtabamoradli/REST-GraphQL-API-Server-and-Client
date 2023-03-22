import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./graphql/typeDefs.js";
import { resolvers } from "./graphql/resolver.js";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const app = express();

dotenv.config();

app.use(express.json());

app.use((request, response, next) => {
  console.log(request.path, request.method);
  next();
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
});

await server.start({
  cors: { credentials: true, origin: "*" },
});
server.applyMiddleware({ app });

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB & Server is listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
