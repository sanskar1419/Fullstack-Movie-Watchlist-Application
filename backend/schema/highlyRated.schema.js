// Importing necessary file, module and package , and creating instances of them
import mongoose from "mongoose";

// Defining HighlyRatedMovie schema
const highlyRaredMovieSchema = new mongoose.Schema(
  {
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
    },
  },
  {
    timestamps: true,
  }
);

// Creating variable through which we are going to access db
const HighlyRatedMovie = mongoose.model(
  "HighlyRatedMovie",
  highlyRaredMovieSchema
);

// Exporting HighlyRatedMovie Model
export default HighlyRatedMovie;
