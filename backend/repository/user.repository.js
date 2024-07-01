// Importing necessary file, module and package , and creating instances of them
import User from "../schema/user.schema.js";

// Defining UserRepository class and there method
export default class UserRepository {
  // Method for adding doctor to db
  async add(newUser) {
    try {
      const existingUser = await User.findOne({ userName: newUser.userName });
      if (existingUser) {
        return;
      }
      const newUserRecord = await User.create(newUser);
      return newUserRecord;
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with database");
    }
  }
  // Method for finding doctor based on user name
  async findUser(userName) {
    try {
      return await User.findOne({ userName });
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong with database");
    }
  }
}
