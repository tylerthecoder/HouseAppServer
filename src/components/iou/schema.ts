import iouController from './controller';
import FriendController from '../friend/controller';

export const IouType = `
  type IouType {
    id: String!,
    to_id: String!,
    to: FriendType,
    from: FriendType,
    from_id: String!,
    amount: Float!,
    resaon: String!,
    time: String
  }

  type Query {
    iou(id: String!): IouType,
    ious: [IouType]
  }

  type Mutation {
    addIou(
      to_id: String!,
      from_id: String!,
      amount: Float!
    ): IouType,

    splitCost(
      payerId: String!,
      amount: Float!,
      nonPayers: [String]!
    ): Boolean
  }
`;

export const IouResolvers = {
  IouType: {
    to: (obj) => FriendController.get({ friend_id: obj.to_id }),
    from: (obj) => FriendController.get({ friend_id: obj.from_id }),
  },
  Query: {
    iou: (_, args) => iouController.get(args),
    ious: () => iouController.getAll(),
  },
  Mutation: {
    addIou: (_, args) => iouController.add(args),
    splitCost: (_, args) => iouController.split(args.payerId, args.amount, args.nonPayers, args.reason),
  },
};
