// Importing necessary file, module and package , and creating instances of them
import "../../env.js";
import Top10MovieRepository from "../repository/top10.Repository.js";

// Defining Top10MovieController class and there method
export default class Top10MovieController {
  constructor() {
    // Creating Instance of Top10MovieRepository
    this.top10MovieRepository = new Top10MovieRepository();
  }

  async getData(req, res) {
    try {
      const data = await this.top10MovieRepository.get();
      if (!data) {
        return res.status(500).json({ error: "Something went wrong" });
      }
      return res.status(200).json({
        top10Movies: [...data],
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
      const data = await this.top10MovieRepository.addTop10(movieId);
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
