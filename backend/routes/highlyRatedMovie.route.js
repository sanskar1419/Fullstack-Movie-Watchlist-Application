// Importing necessary file, module and package , and creating instances of them
import express from "express";
import HighlyRatedMovieController from "../controller/highlyRatedMovie.Controller.js";
// Initializing Router
const highlyRatedMovieRouter = express.Router();

// Creating Instance of highlyRatedMovieController
const highlyRatedMovieController = new HighlyRatedMovieController();

// Handling all request
highlyRatedMovieRouter.get("/", (req, res) => {
  highlyRatedMovieController.getData(req, res);
});
highlyRatedMovieRouter.post("/", (req, res) => {
  highlyRatedMovieController.add(req, res);
});

// Exporting highlyRatedMovieRouter
export default highlyRatedMovieRouter;
