import * as express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import * as path from 'path';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import CheckPass from './auth';
import * as mongo from 'mongoose';
import log from './log';
import { BaseChoreType, BaseChoreResolvers } from './components/base-chore/schema';
import { ChoreType, ChoreResolvers } from './components/chore/schema';
import { FriendType, FriendResolvers } from './components/friend/schema';
import { IouType, IouResolvers } from './components/iou/schema';
import { mainResolvers, mainSchema } from './components/schema';
import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

declare var process: {
  env: {
    PORT: string;
    NODE_ENV: string;
  },
};
declare var __dirname: string;

export const app = express();
const publicDir = path.join(__dirname, 'public');
const port = process.env.PORT || 1337;
app.use(express.static(publicDir));

log.info(`Listening on port ${port}`);
log.info(`Environment: ${process.env.NODE_ENV}`);

const uri = (process.env.NODE_ENV === 'development')
  ? 'mongodb+srv://Tyler_Tracy:tyler123@cluster0-pz7ea.mongodb.net/lounge621'
  : 'mongodb+srv://Tyler_Tracy:tyler123@cluster0-pz7ea.mongodb.net/lounge621Prod';
mongo.connect(uri);

const types = mergeTypes([BaseChoreType, ChoreType, FriendType, IouType, mainSchema]);
const resolvers = mergeResolvers([BaseChoreResolvers, ChoreResolvers, FriendResolvers, IouResolvers, mainResolvers ]);

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
