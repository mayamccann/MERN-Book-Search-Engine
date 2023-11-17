// similar to module project
const {} = require('apollo-server-express');
const { User } = require('../models');

const typeDefs = '
type Query {
    _id: ID!
    name: String!
}

type Matchup {
    _id: ID!
    : String!
    : String!
    : Int

}
';

type {
    token: ID!
    user: User
}

module.exports = typeDefs;


  type Query {
    tech: [Tech]
    matchups(_id: String): [Matchup]
  }

  type Mutation {
    createMatchup(tech1: String!, tech2: String!): Matchup
    createVote(_id: String!, techNum: Int!): Matchup
  }

  //type Auth: access token, authorization?
type Auth {
  token: ID!
  user: User
}