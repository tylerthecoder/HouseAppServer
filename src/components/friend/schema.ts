import FriendController from './controller';
import ChoreController from '../chore/controller';
import * as mongo from 'mongoose';

export const FriendType = `
  type FriendType {
    name: String!,
    color: String!,
    hash: String!,
    friend_id: String!,
    points: Int,
    chores: [ChoreType],
  }

  type Query {
    friend (friend_id: String): FriendType,
    friends: [FriendType]
  }
`;

export const FriendResolvers = {
  FriendType: {
    points: (obj) => FriendController.calcPoints(obj),
    chores: (obj) => ChoreController.getFriendChores(obj),
  },

  Query: {
    friend: (_, args) => FriendController.get(args),
    friends: () => FriendController.getAll(),
  },
};

export interface IFriend extends mongo.Document {
 name: string;
 color: string;
 hash: string;
 friend_id: string;
 points?: number;
}

const FriendSchema = new mongo.Schema({
    name: String,
    color: String,
    hash: String,
    friend_id: String,
});

export const FriendModel: mongo.Model<IFriend> = mongo.model<IFriend>('Friends', FriendSchema);