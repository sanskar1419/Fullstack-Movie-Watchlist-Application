// Importing necessary file, module and package , and creating instances of them
import Movie from "../schema/movie.schema.js";
import Top10 from "../schema/top10.schema.js";
// Defining Top10MovieRepository class and there method
export default class Top10MovieRepository {
  // Method for finding doctor based on user name
  async get() {
    try {
      return await Top10.find({}).populate("movie");
    } catch (error) {
      console.log(error);
    }
  }

  async addTop10(movieId) {
    try {
      const movie = await Movie.findById(movieId);
      if (!movie) {
        return;
      }

      const isMovieInTop10Collection = await Top10.findOne({
        movie: movieId,
      });

      if (isMovieInTop10Collection) {
        return;
      }
      const result = await Top10.create({ movie: movie });
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
