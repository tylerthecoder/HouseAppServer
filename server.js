const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mergeGraphqlSchemas = require('merge-graphql-schemas')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { CheckPass } = require('./src/auth.js');
const { BaseChoreType, BaseChoreResolvers } = require('./src/components/base-chore/schema');
const { FriendType, FriendResolvers } = require('./src/components/friend/schema');
const { ChoreType, ChoreResolvers } = require('./src/components/chore/schema');
const { IouType, IouResolvers } = require('./src/components/iou/schema');

const app = express();
const publicDir = path.join(__dirname, 'public');
const port = process.env.PORT || 1337;
app.use(express.static(publicDir));

const { mergeTypes } = mergeGraphqlSchemas;

const types = mergeTypes([BaseChoreType, ChoreType, FriendType, IouType], { all: true });

const schema = makeExecutableSchema({
  typeDefs: types,
  resolvers: [BaseChoreResolvers, FriendResolvers, ChoreResolvers, IouResolvers],
});

app.use('/graphql', bodyParser.json(), cors(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
  formatError: (err) => { console.log(err.stack); return err; },
}));
app.listen(port);
module.exports = app;

app.get('/login', (req, res) => {
  CheckPass(req, res);
});
