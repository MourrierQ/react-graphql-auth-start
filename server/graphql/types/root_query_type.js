const graphql = require("graphql");
const { GraphQLObjectType } = graphql;

const { user, users, addUser } = require("../queries/UserQueries");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user,
    users,
    addUser
  }
});

module.exports = RootQueryType;
