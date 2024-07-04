// Importing necessary file, module and package , and creating instances of them
import express from "express";
import Top10MovieController from "../controller/top10.Controller.js";
// Initializing Router
const top10MovieRouter = express.Router();

// Creating Instance of Top10MovieController
const top10MovieController = new Top10MovieController();

// Handling all request
top10MovieRouter.get("/", (req, res) => {
  top10MovieController.getData(req, res);
});
top10MovieRouter.post("/", (req, res) => {
  top10MovieController.add(req, res);
});

// Exporting top10MovieRouter
export default top10MovieRouter;
