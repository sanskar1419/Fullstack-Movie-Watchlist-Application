// Defining DoctorModel class
export default class UserModel {
  constructor(name, email, userName, password, id) {
    this._id = id;
    this.name = name;
    this.email = email;
    this.userName = userName;
    this.password = password;
  }
}
