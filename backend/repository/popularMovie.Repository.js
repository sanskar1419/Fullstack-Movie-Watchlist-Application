// Importing necessary file, module and package , and creating instances of them
import Movie from "../schema/movie.schema.js";
import PopularMovie from "../schema/popularMovie.schema.js";
// Defining popularMovieRepository class and there method
export default class PopularMovieRepository {
  // Method for finding doctor based on user name
  async get() {
    try {
      return await PopularMovie.find({}).populate("movie");
    } catch (error) {
      console.log(error);
    }
  }

  async addPopularMovie(movieId) {
    try {
      const movie = await Movie.findById(movieId);
      if (!movie) {
        return;
      }

      const isMovieInPopularMovieCollection = await PopularMovie.findOne({
        movie: movieId,
      });

      if (isMovieInPopularMovieCollection) {
        return;
      }
      const result = await PopularMovie.create({ movie: movie });
      result.save();
      return result;
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
}
