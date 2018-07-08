const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { CheckPass } = require('./src/auth.js');
const {BaseChoreType, BaseChoreResolvers } = require('./src/components/base-chore/schema');
const {FriendType, FriendResolvers } = require('./src/components/friend/schema')
const {ChoreType, ChoreResolvers } = require('./src/components/chore/schema')
const { makeExecutableSchema } = require('graphql-tools');

const app = express();
const publicDir = path.join(__dirname,'public');
const port = process.env.PORT || 1337;
app.use(express.static(publicDir))

const mergeGraphqlSchemas = require('merge-graphql-schemas')
const mergeTypes = mergeGraphqlSchemas.mergeTypes

const types =  mergeTypes([BaseChoreType, ChoreType, FriendType], { all: true })


const schema = makeExecutableSchema({
    typeDefs: types,
    resolvers: [BaseChoreResolvers, FriendResolvers, ChoreResolvers]
});

app.use('/graphql', bodyParser.json(), cors(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));



app.listen(port);
module.exports = app;

app.get("/login", (req,res) => {
    CheckPass(req,res)
})
