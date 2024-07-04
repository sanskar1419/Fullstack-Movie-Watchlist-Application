// Importing necessary file, module and package , and creating instances of them
import mongoose from "mongoose";

// Defining PopularMovie schema
const popularMovieSchema = new mongoose.Schema(
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
const PopularMovie = mongoose.model("PopularMovie", popularMovieSchema);

// Exporting PopularMovie Model
export default PopularMovie;
