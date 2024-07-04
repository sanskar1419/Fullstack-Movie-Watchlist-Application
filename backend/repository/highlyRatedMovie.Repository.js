// Importing necessary file, module and package , and creating instances of them
import Movie from "../schema/movie.schema.js";
import HighlyRatedMovie from "../schema/highlyRated.schema.js";
// Defining HighlyRatedMovieMovieRepository class and there method
export default class HighlyRatedMovieRepository {
  // Method for finding doctorHighlyRatedMovie user name
  async get() {
    try {
      return await HighlyRatedMovie.find({}).populate("movie");
    } catch (error) {
      console.log(error);
    }
  }

  async addHighlyRatedMovie(movieId) {
    try {
      const movie = await Movie.findById(movieId);
      if (!movie) {
        return;
      }

      const isMovieInHighlyRatedMovieCollection =
        await HighlyRatedMovie.findOne({
          movie: movieId,
        });

      if (isMovieInHighlyRatedMovieCollection) {
        return;
      }
      const result = await HighlyRatedMovie.create({ movie: movie });
      result.save();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
