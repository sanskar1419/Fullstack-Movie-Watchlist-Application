// Importing necessary file, module and package , and creating instances of them
import mongoose from "mongoose";

// Defining Movie schema
const movieSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    IMDbRating: {
      type: Number,
      required: true,
    },
    popularity: {
      type: Number,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    genre: [],
    runtime: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    writers: [],
    productionCompany: {
      type: String,
      required: true,
    },
    productionCountry: {
      type: String,
      required: true,
    },
    poster: {
      type: String,
      required: true,
    },
    image: [],
    youtubeURL: [],
    streamingPlatform: [],
    similarMovieItem: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Creating variable through which we are going to access db
const Movie = mongoose.model("Movie", movieSchema);

// Exporting Movie Model
export default Movie;
