import BaseChoreController from './controller';
import * as mongo from 'mongoose';

export const BaseChoreType = `
  type BaseChoreType {
    id: String!,
    name: String!,
    creator_id: String,
    points: Int!,
  }

  type Query {
    baseChores: [BaseChoreType],
  }

  type Mutation {
    addBaseChore(
      name: String!,
      points: Int!,
      friend: String!,
    ) : BaseChoreType
  }
`;

export const BaseChoreResolvers = {
  Query: {
    baseChores: () => BaseChoreController.getAll(),
  },
  Mutation: {
    addBaseChore: (_, args) => BaseChoreController.add(args),
  },
};

export interface IBaseChore extends mongo.Document {
  created_date: number;
  name: string;
  points: number;
}

const baseChoreSchema = new mongo.Schema({
    created_date: Number,
    name: String,
    points: Number,
});

export const BaseChoreModel: mongo.Model<IBaseChore> = mongo.model<IBaseChore>('base-chores', baseChoreSchema);
