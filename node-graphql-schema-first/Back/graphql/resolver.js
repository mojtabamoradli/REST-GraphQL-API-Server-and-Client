import { Dummy } from "./models/dummy.js";

export const resolvers = {
  Query: {
    dummies: () => Dummy.find().sort({ createdAt: -1 }).exec(), // -1 for sorting based on the most recent ones, 1 for sorting based on the oldest ones
    dummy: (_, { id }) => Dummy.findById(id).exec(),
  },
  Mutation: {
    createDummy: async (_, { title }) => {
      const d = new Dummy({ title, createdAt: new Date(), updatedAt: new Date() });
      await d.save();
      return d;
    },
    updateDummy: async (_, { title, id }) => {
      const d = (await Dummy.updateOne({ _id: id }, { title, updatedAt: new Date() })).modifiedCount; // returns 1 if updated and 0 if not
      return d;
    },
    deleteDummy: async (_, { id }) => {
      const d = (await Dummy.deleteOne({ _id: id })).deletedCount; // returns 1 if deleted and 0 if not
      return d;
    },
  },
};
