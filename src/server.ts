import * as express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import CheckPass from './auth';
import './mongo';
import { BaseChoreType, BaseChoreResolvers } from './components/base-chore/schema';
import { ChoreType, ChoreResolvers } from './components/chore/schema';
import { FriendType, FriendResolvers } from './components/friend/schema';
import { IouType, IouResolvers } from './components/iou/schema';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

declare var process: {
  env: {
    PORT: string;
  },
};
declare var __dirname: string;

export const app = express();
const publicDir = path.join(__dirname, 'public');
const port = process.env.PORT || 1337;
app.use(express.static(publicDir));

const types = mergeTypes([BaseChoreType, ChoreType, FriendType, IouType]);
const resolvers = mergeResolvers([BaseChoreResolvers, ChoreResolvers, FriendResolvers, IouResolvers ]);

const schema = makeExecutableSchema({
  resolvers,
  typeDefs: types,
});

app.use('/graphql', bodyParser.json(), cors(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));
app.listen(port);

app.get('/login', (req, res) => {
  CheckPass(req, res);
});
