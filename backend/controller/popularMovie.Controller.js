// Importing necessary file, module and package , and creating instances of them
import "../../env.js";
import PopularMovieRepository from "../repository/popularMovie.Repository.js";

// Defining PopularMovieController class and there method
export default class PopularMovieController {
  constructor() {
    // Creating Instance of popularMovieRepository
    this.popularMovieRepository = new PopularMovieRepository();
  }

  async getData(req, res) {
    try {
      const data = await this.popularMovieRepository.get();
      if (!data) {
        return res.status(500).json({ error: "Something went wrong" });
      }
      return res.status(200).json({
        popularMovies: [...data],
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
      const data = await this.popularMovieRepository.addPopularMovie(movieId);
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
