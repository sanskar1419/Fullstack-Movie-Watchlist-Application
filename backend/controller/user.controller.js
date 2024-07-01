// Importing necessary file, module and package , and creating instances of them
import "../../env.js";
import UserRepository from "../repository/user.repository.js";
import UserModel from "../model/user.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// Defining UserController class and there method
export default class UserController {
  constructor() {
    // Creating Instance of UserRepository
    this.userRepository = new UserRepository();
  }

  // Register User Method
  async registerUser(req, res) {
    try {
      const { name, userName, password, email } = req.body;
      const hashPassword = await bcrypt.hash(password, 12);
      const newUser = new UserModel(name, email, userName, hashPassword);
      const createdRecord = await this.userRepository.add(newUser);
      if (!createdRecord) {
        res.status(409).json({ error: "User Name Already exist" });
      } else {
        res.status(201).json({
          Message: "User Registered",
          User: {
            name: createdRecord.name,
            userName: createdRecord.userName,
            email: createdRecord.email,
            watchLists: createdRecord.watchLists,
            createdAt: createdRecord.createdAt,
          },
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  // SignIn Doctor Method
  async signIn(req, res) {
    try {
      const { userName, password } = req.body;
      const user = await this.userRepository.findUser(userName);
      if (!user) {
        return res.status(400).json({ error: "Invalid Credentials" });
      }
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (passwordMatch) {
        const token = jwt.sign(
          {
            userId: user._id,
            userName: user.userName,
          },
          process.env.JWT_SECRET_KEY,
          {
            expiresIn: "1h",
          }
        );
        res.status(200).json({ token: token });
      } else {
        return res.status(401).json({ error: "Invalid Credentials" });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  async getUser(req, res) {
    try {
      const userName = req.query.userName;
      const user = await this.userRepository.findUser(userName);
      if (!user) {
        return res.status(400).json({ error: "Something went wrong" });
      }
      return res.status(200).json({
        name: user.name,
        userName: user.userName,
        email: user.email,
        watchLists: user.watchLists,
        createdAt: user.createdAt,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }

  async getUserWatchLists(req, res) {
    try {
      const userName = req.query.userName;
      const user = await this.userRepository.findUser(userName);
      if (!user) {
        return res.status(400).json({ error: "Something went wrong" });
      }
      return res.status(200).json({
        watchLists: user.watchLists,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  }
}
