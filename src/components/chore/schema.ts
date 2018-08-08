import ChoreController from './controller';
import BaseChoreController from '../base-chore/controller';
import FriendController from '../friend/controller';
import * as mongo from 'mongoose';

export const ChoreType = `
  type ChoreType {
    id: String!,
    status: String,
    doer_id: String,
    chore_id: String,
    creator_id: String,
    base_chore_id: String!,
    name: String,
    points: Int,
    doer: FriendType,
    creator: FriendType
  }

  type Query {
    chore(id: String!): ChoreType,
    chores: [ChoreType]
  }

  type Mutation {
    changeStatus (
      id: String!,
      status: String!
    ): ChoreType,

    addChore(
      base_chore_id: String!,
      friend_id: String
    ): ChoreType
  }
`;

export const ChoreResolvers = {
  ChoreType: {
    name: (obj) => BaseChoreController.get(obj, 'name'),
    points: (obj) => BaseChoreController.get(obj, 'points'),
    doer: (obj) => FriendController.get({friend_id: obj.doer_id}),
    creator: (obj) => FriendController.get({friend_id: obj.creator_id}),
  },
  Query: {
    chore: (_, args) => ChoreController.get(args),
    chores: () => ChoreController.getAll(),
  },
  Mutation: {
    changeStatus: (_, args) => ChoreController.changeStatus(args),
    addChore: (_, args) => ChoreController.add(args)
  },
};

export interface IChore extends mongo.Document {
  doer_id: string;
  creator_id: string;
  base_chore_id: string;
  status: string;
  assigned_data: number;
}

export let ChoreSchema: mongo.Schema = new mongo.Schema({
  doer_id: String,
  creator_id: String,
  base_chore_id: String,
  status: String,
  assigned_date: Number,
});

export const ChoreModel: mongo.Model<IChore> = mongo.model<IChore>('Chores', ChoreSchema);
