// Importing necessary file, module and package , and creating instances of them
import express from "express";
import UserController from "../controller/user.controller.js";
import userRegistrationDataMiddleware from "../middleware/user.registration.middleware.js";

// Initializing Router
const userRouter = express.Router();

// Creating Instance of userController
const userController = new UserController();

// Handling all request
userRouter.post("/register", userRegistrationDataMiddleware, (req, res) => {
  userController.registerUser(req, res);
});
userRouter.post("/login", (req, res) => {
  userController.signIn(req, res);
});
// Query Parameter
userRouter.get("/", (req, res) => {
  userController.getUser(req, res);
});
// Query Parameter
userRouter.get("/watchLists/", (req, res) => {
  userController.getUserWatchLists(req, res);
});

// Exporting userRouter
export default userRouter;
