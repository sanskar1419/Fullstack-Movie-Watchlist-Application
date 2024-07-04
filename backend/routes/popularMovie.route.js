// Importing necessary file, module and package , and creating instances of them
import express from "express";
import PopularMovieController from "../controller/popularMovie.Controller.js";
// Initializing Router
const popularMovieRouter = express.Router();

// Creating Instance of userController
const popularMovieController = new PopularMovieController();

// Handling all request
popularMovieRouter.get("/", (req, res) => {
  popularMovieController.getData(req, res);
});
popularMovieRouter.post("/", (req, res) => {
  popularMovieController.add(req, res);
});

// Exporting popularMovieRouter
export default popularMovieRouter;
