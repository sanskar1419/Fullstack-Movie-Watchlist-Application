// Importing necessary file, module and package , and creating instances of them
import mongoose from "mongoose";

// Defining WatchList schema
const watchListScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: [3, "Name should be minimum of 3 character"],
      maxLength: [25, "Name can't be greater than 25 characters"],
    },
    description: {
      type: String,
    },
    watchListItem: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movie",
      },
    ],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

// Creating variable through which we are going to access db
const WatchList = mongoose.model("WatchList", watchListScheme);

// Exporting WatchList Model
export default WatchList;
