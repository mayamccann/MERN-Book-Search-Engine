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

module.exports = resolvers;