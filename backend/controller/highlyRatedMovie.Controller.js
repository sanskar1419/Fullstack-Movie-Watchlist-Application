// Importing necessary file, module and package , and creating instances of them
import "../../env.js";
import HighlyRatedMovieRepository from "../repository/highlyRatedMovie.Repository.js";
// Defining HighlyRatedMovieController class and there method
export default class HighlyRatedMovieController {
  constructor() {
    // Creating Instance of HighlyRatedMovieRepository
    this.highlyRatedMovieRepository = new HighlyRatedMovieRepository();
  }

  async getData(req, res) {
    try {
      const data = await this.highlyRatedMovieRepository.get();
      if (!data) {
        return res.status(500).json({ error: "Something went wrong" });
      }
      return res.status(200).json({
        highlyRatedMovies: [...data],
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  async add(req, res) {
    try {
      const movieId = req.query.movieID;
      const data = await this.highlyRatedMovieRepository.addHighlyRatedMovie(
        movieId
      );
      if (!data) {
        return res.status(500).json({ error: "Something went wrong" });
      }
      return res.status(200).json({
        message: "Movie Added Successfully!!!!!",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
}
