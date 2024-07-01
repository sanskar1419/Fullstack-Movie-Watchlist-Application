// Importing necessary file, module and package , and creating instances of them
import mongoose from "mongoose";

// Defining General schema
const generalSchema = new mongoose.Schema(
  {
    popularMovies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movie",
      },
    ],
    top10Movies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movie",
      },
    ],
    highlyRatedMovies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movie",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Creating variable through which we are going to access db
const General = mongoose.model("General", generalSchema);

// Exporting General Model
export default General;
