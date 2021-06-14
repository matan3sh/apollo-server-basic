const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./Schema/TypeDefs');
const { resolvers } = require('./Schema/Resolvers');

const express = require('express');
const app = express();

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server Runing on PORT ${PORT}`);
});
