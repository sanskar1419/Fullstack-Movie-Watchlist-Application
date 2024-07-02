// Importing necessary file, module and package , and creating instances of them
import PopularMovie from "../schema/popularMovie.schema.js";
// Defining popularMovieRepository class and there method
export default class PopularMovieRepository {
  // Method for finding doctor based on user name
  async get() {
    try {
      return await PopularMovie.find({}).populate("movie");
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  async addPopularMovie(movieId) {
    try {
      const result = await PopularMovie.create({ movie: movieId });
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
