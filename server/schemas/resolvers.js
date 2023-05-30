const { AuthenticationError } = require('apollo-server-express');
const { User, Thought } = require('../models');

const resolvers = {
    Query: {
        me: async (parent, args) => {
          const userData = await User.findOne({})
            .select('-__v -password')
            .populate('thoughts')
            .populate('friends');
      
          return userData;
        },
        // other queries remain the same
      },
    thought: async (parent, { _id }) => {
        return Thought.findOne({ _id });
      },
      Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
          
            return { token, user };
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
          
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const correctPw = await user.isCorrectPassword(password);
          
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
          
            const token = signToken(user);
            return { token, user };
          }
          },
    // get all users
users: async () => {
    return User.find()
      .select('-__v -password')
      .populate('friends')
      .populate('thoughts');
  },
  // get a user by username
  user: async (parent, { username }) => {
    return User.findOne({ username })
      .select('-__v -password')
      .populate('friends')
      .populate('thoughts');
  },
    
  };

module.exports = resolvers;

