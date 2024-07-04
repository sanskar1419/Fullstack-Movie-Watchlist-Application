// Importing necessary file, module and package , and creating instances of them
import mongoose from "mongoose";

// Defining user schema
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      minLength: [3, "Name should be minimum of 3 character"],
      maxLength: [25, "Name can't be greater than 25 characters"],
    },
    userName: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: [true, "Email address already in use"],
    },
    watchLists: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "WatchList",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// Creating variable through which we are going to access db
const User = mongoose.model("User", userSchema);

// Exporting User Model
export default User;
