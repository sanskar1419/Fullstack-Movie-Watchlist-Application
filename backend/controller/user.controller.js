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
        res.status(409).send("User Name Already exist");
      } else {
        res.status(201).send({
          Message: "User Registered",
          User: createdRecord,
        });
      }
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with database");
    }
  }

  // SignIn Doctor Method
  async signIn(req, res) {
    try {
      const { userName, password } = req.body;
      const user = await this.userRepository.findUser(userName);
      if (!user) {
        return res.status(400).send("Invalid Credentials");
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
        res.status(200).send(token);
      } else {
        return res.status(401).send("Invalid Credentials");
      }
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with database");
    }
  }
}
