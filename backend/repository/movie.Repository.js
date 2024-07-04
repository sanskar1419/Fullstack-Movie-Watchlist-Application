// Importing necessary file, module and package , and creating instances of them
import Movie from "../schema/movie.schema.js";
// import { ObjectId } from "mongodb";
import mongoose from "mongoose";

// Defining MovieRepository class and there method
export default class MovieRepository {
  // Method for finding doctor based on user name
  async get() {
    try {
      return await Movie.find({}).populate({ path: "similarMovieItem" });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  async addMovie(movie) {
    try {
      const createdRecord = await Movie.create(movie);
      return createdRecord;
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  async addSimilarMovie(movieId) {
    try {
      const movie = await Movie.findById(movieId);
      const similarMovies = await Movie.find({
        genre: { $in: [...movie.genre] },
        _id: { $ne: mongoose.Types.ObjectId.createFromHexString(movieId) },
      });
      movie.similarMovieItem = [...similarMovies];
      movie.save();
      return movie;
    } catch (error) {
      console.log(error);
    }
  }
}
