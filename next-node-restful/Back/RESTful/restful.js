import express from "express";
import cors from "cors";
import data from "./data/data.js";
import bodyParser from "body-parser";

const restfulRouter = express.Router();

restfulRouter.use(cors());
restfulRouter.use(express.json());

restfulRouter.use(bodyParser.urlencoded({ extended: true }));
restfulRouter.use(bodyParser.json());

restfulRouter.get("/data", (request, response) => {
  response.send(data);
});

restfulRouter.get("/data/:id", (request, response) => {
  const askedData = data.find((item) => item.id === parseInt(request.params.id));
  if (!data) return response.status(404).send("Not Found!");
  response.send(askedData);
});

// For getting data you can also use POST request when you need some data to be sent in body in return. Here I did not implement this way.

restfulRouter.post("/data", (request, response) => {
  const askedData = {
    id: data.length + 1,
    title: request.body.title,
  };
  data.push(askedData);
  response.send(data);
});

restfulRouter.put("/data/:id", (request, response) => {
  const askedData = data.find((item) => item.id === parseInt(request.params.id));
  if (!data) return response.status(404).send("Not Found!");
  askedData.title = request.body.title;
  response.send(askedData);
});

restfulRouter.delete("/data/:id", (request, response) => {
  const askedData = data.find((item) => item.id === parseInt(request.params.id));
  if (!data) return response.status(404).send("Not Found!");

  const askedDataIndex = data.indexOf(askedData);
  data.splice(askedDataIndex, 1);
  return response.send(data);
});

export default restfulRouter;
