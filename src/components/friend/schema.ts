import FriendController from './controller';
import ChoreController from '../chore/controller';
import iouController from '../iou/controller';

export const FriendType = `
  type FriendType {
    name: String!,
    color: String!,
    hash: String!,
    friend_id: String!,
    points: Int,
    chores: [ChoreType],
    iowho: [IouType],
    allIous: [IouType]
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
    iowho: (obj) => iouController.ioWho(obj.friend_id),
    allIous: (obj) => iouController.allMyIous(obj.friend_id),
  },

  Query: {
    friend: (_, args) => FriendController.get(args),
    friends: () => FriendController.getAll(),
  },
};
