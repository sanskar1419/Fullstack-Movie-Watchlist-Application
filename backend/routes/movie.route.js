// Importing necessary file, module and package , and creating instances of them
import express from "express";
import MovieController from "../controller/movie.Controller.js";

// Initializing Router
const movieRouter = express.Router();

// Creating Instance of userController
const movieController = new MovieController();

// Handling all request
movieRouter.get("/", (req, res) => {
  movieController.getData(req, res);
});
movieRouter.post("/", (req, res) => {
  movieController.add(req, res);
});
movieRouter.post("/:movieID", (req, res) => {
  movieController.addSimilarMovies(req, res);
});

// Exporting movieRouter
export default movieRouter;
