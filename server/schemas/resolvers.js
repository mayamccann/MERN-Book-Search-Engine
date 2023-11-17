// similar to module project

const { User } = require('../models');

const resolvers = {
    Query: {
        tech: async () => {
            return Tech.find({});
          },
          matchups: async (parent, { _id }) => {
            const params = _id ? { _id } : {};
            return Matchup.find(params);
          },
    },
}

//Find for async for users : return await
users: async () => {
  return await User.find().select().populate();
}

module.exports = resolvers;