import express from "express";
import dotenv from "dotenv";
import restfulRouter from "./RESTful/restful.js";

const app = express(); 

dotenv.config();

// app.use(express.json());

app.use((request, response, next) => {
  console.log(request.path, request.method);
  next();
});

app.use(restfulRouter);

app.listen(process.env.PORT, () => {
  console.log(`Connected to DB & Server is listening on port ${process.env.PORT}`);
});
