const axios = require("axios");

const UserType = require("../types/UserType");
const { GraphQLNonNull, GraphQLString, GraphQLList } = require("graphql");

//CRUD
module.exports = {
  user: {
    type: UserType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(parentValue, args) {
      return axios
        .get("http://localhost:3000/users/" + args.id)
        .then(res => res.data);
    }
  },
  users: {
    type: GraphQLList(UserType),
    resolve(parentValue, args) {
      return axios.get("http://localhost:3000/users").then(res => res.data);
    }
  },
  addUser: {
    type: UserType,
    args: {
      username: { type: new GraphQLNonNull(GraphQLString) },
      email: { type: new GraphQLNonNull(GraphQLString) },
      password: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(parentValue, args) {
      return axios
        .post("http://localhost:3000/users", {
          username: args.username,
          email: args.email,
          password: args.password
        })
        .then(res => res.data);
    }
  },
  editUser: {
    type: UserType,
    args: {
      id: { type: GraphQLNonNull(GraphQLString) },
      username: { type: GraphQLString },
      email: { type: GraphQLString },
      password: { type: GraphQLString }
    },
    resolve(parentValue, args) {
      return axios
        .patch("http://localhost:3000/users/" + args.id, args)
        .then(res => res.data);
    }
  },
  deleteUser: {
    type: UserType,
    args: {
      id: { type: new GraphQLNonNull(GraphQLString) }
    },
    resolve(parentValue, args) {
      return axios
        .delete("http://localhost:3000/users/" + args.id)
        .then(res => res.data);
    }
  }
};
