// Importing necessary file, module and package , and creating instances of them
import mongoose from "mongoose";

// Defining Top10 schema
const top10MovieSchema = new mongoose.Schema(
  {
    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "movie",
    },
  },
  {
    timestamps: true,
  }
);

// Creating variable through which we are going to access db
const Top10 = mongoose.model("Top10", top10MovieSchema);

// Exporting Top10 Model
export default Top10;
