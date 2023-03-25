import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { mergeResolvers, mergeTypeDefs } from "@graphql-tools/merge";
import { UserResolver } from "./graphql/resolvers/UserResolver.js";
import { UserType } from "./graphql/typeDefs/UserType.js";

const app = express();
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000", // Need to be commented if you want apollo sandbox to work
    // origin: "*"  // Need to be uncommented if you want apollo sandbox to work
  })
);

dotenv.config();

app.use(express.json());
app.use((request, response, next) => {
  console.log(request.path, request.method);

  response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000"); // Need to be commented if you want apollo sandbox to work
  response.setHeader("Access-Control-Allow-Credentials", true); // Need to be commented if you want apollo sandbox to work

  next();
});

const server = new ApolloServer({
  typeDefs: mergeTypeDefs([UserType]), // You can add more Types to the array if you have
  resolvers: mergeResolvers([UserResolver]), // You can add more Resolvers to the array if you have
  context: ({ req, res }) => ({ req, res }),
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground({})],
});

await server.start();

server.applyMiddleware({ app, path: "/graphql", cors: false });

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
