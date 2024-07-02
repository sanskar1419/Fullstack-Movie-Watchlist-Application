// Importing necessary file, module and package , and creating instances of them
import express from "express";
import GeneralController from "../controller/popularMovie.Controller.js";
// Initializing Router
const popularMovieRouter = express.Router();

// Creating Instance of userController
const generalController = new GeneralController();

// Handling all request
popularMovieRouter.get("/", (req, res) => {
  generalController.getData(req, res);
});
// popularMovieRouter.post("/", (req, res) => {
//   generalController.createCollection(req, res);
// });

// Exporting popularMovieRouter
export default popularMovieRouter;
