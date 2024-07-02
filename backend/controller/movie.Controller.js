// Importing necessary file, module and package , and creating instances of them
import "../../env.js";
import MovieModel from "../model/movie.model.js";
import MovieRepository from "../repository/movie.Repository.js";

// Defining MovieController class and there method
export default class MovieController {
  constructor() {
    // Creating Instance of MovieRepository
    this.movieRepository = new MovieRepository();
  }

  async getData(req, res) {
    try {
      const data = await this.movieRepository.get();
      if (!data) {
        return res.status(500).json({ error: "Something went wrong" });
      }
      return res.status(200).json({
        movies: [...data],
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
      const {
        name,
        description,
        rating,
        IMDbRating,
        popularity,
        year,
        type,
        genre,
        runtime,
        language,
        director,
        writers,
        productionCompany,
        productionCountry,
        poster,
        image,
        youtubeURL,
        streamingPlatform,
      } = req.body;
      const movie = new MovieModel(
        name,
        description,
        rating,
        IMDbRating,
        popularity,
        year,
        type,
        genre,
        runtime,
        language,
        director,
        writers,
        productionCompany,
        productionCountry,
        poster,
        image,
        youtubeURL,
        streamingPlatform
      );
      const data = await this.movieRepository.addMovie(movie);
      if (!data) {
        return res.status(500).json({ error: "Something went wrong" });
      }
      return res.status(200).json({
        ...data._doc,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  async addSimilarMovies(req, res) {
    try {
      const movieID = req.params.movieID;
      const data = await this.movieRepository.addSimilarMovie(movieID);
      if (!data) {
        return res.status(500).json({ error: "Something went wrong" });
      }
      return res.status(200).json({
        message: "Completed",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
}
