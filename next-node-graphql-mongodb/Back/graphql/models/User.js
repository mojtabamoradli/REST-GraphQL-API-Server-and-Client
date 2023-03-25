import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please Enter Your First Name!"],
  },
  lastName: {
    type: String,
    required: [true, "Please Enter Your Last Name!"],
  },
  email: {
    type: String,
    unique: [true, "Email Already Exists."],
    required: [true, "Please Enter Your Email!"],
    validate: {
      validator: function (password) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(password);
      },
      message: (props) => "Invalid Email Format!",
    },
  },
  password: {
    type: String,
    required: [true, "Please Choose a Password!"],
    min: [9, "Password must be 9 character minimum!"],
    validate: {
      validator: function (password) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
      },
      message: (props) => "Password must be 9 character minimum, including one number, one uppercase, one lowercase and one special character @$!%*?&",
    },
  },
  createdAt: {
    type: Number,
    immutable: true, // if true, it cannot be changed
  },
  updatedAt: Number,
});

UserSchema.pre('save', async function (next) {  // this hook let me use validate function and hash the password, it first validate it and then hash it before saving it in the db
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

export const User = mongoose.model("user", UserSchema);
