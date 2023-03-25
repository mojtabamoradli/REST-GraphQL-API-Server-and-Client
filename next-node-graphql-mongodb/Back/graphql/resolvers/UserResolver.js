import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import cookie from "cookie";
import { User } from "../models/User.js";

export const UserResolver = {
  Query: {
    users: () => User.find().sort({ createdAt: -1 }).exec(), // -1 for sorting based on the most recent ones, 1 for sorting based on the oldest ones
    user: (_, { email }) => User.findOne({ email }).exec(),
    verifyAuthToken: (_, { token }) => {
      try {
        const verified = jsonwebtoken.verify(token, process.env.JWT_SECRET_KEY);
        return true;
      } catch (error) {
        return false;
      }
    },
    signOut: (_, __, context) => {
      try {
        context.res.cookie("token", "", { path: "/", maxAge: 0 });
        return true;
      } catch (error) {
        return false;
      }
    },
  },
  Mutation: {
    createUser: async (_, { firstName, lastName, email, password }) => {
      return await new User({ firstName, lastName, email, password: password, createdAt: new Date(), updatedAt: new Date() }).save();
    },
    signIn: async (_, { email, password }, context) => {
      const user = await User.findOne({ email });
      if (user) {
        if (await bcrypt.compare(password, user.password)) {
          const token = jsonwebtoken.sign({ email }, process.env.JWT_SECRET_KEY);
          context.res.cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000 }); // I could make it httpOnly: true but then I cannot access it from browser to verify it.
          return user;
        }
      }
    },
    updateUser: async (_, { firstName, lastName, email, password, id }) => {
      return (await User.updateOne({ _id: id }, { firstName, lastName, email, password, updatedAt: new Date() })).modifiedCount; // returns 1 if updated and 0 if not
    },
    deleteUser: async (_, { id }) => {
      return (await User.deleteOne({ _id: id })).deletedCount; // returns 1 if deleted and 0 if not
    },
  },
};
