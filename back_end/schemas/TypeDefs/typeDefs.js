const { gql } = require("apollo-server-express")

const typeDefs = gql`
  type User {
    userName: String
    email: String
    password: String
    createdAt: Date
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addThought(thoughtText: String!, thoughtAuthor: String!): Thought
    addComment(thoughtId: ID!, commentText: String!): Thought
    removeThought(thoughtId: ID!): Thought
    removeComment(thoughtId: ID!, commentId: ID!): Thought
  }
`

module.exports = typeDefs
