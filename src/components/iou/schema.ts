import iouController from './controller';
import FriendController from '../friend/controller';
import * as mongo from 'mongoose';

export const IouType = `
  type IouType {
    id: String!,
    to_id: String!,
    to: FriendType,
    from: FriendType,
    from_id: String!,
    amount: Float!,
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
    ): IouType
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
  },
};

const iouSchema = new mongo.Schema({
  to_id: String,
  from_id: String,
  amount: Number,
  time: String,
});

export interface IIou extends mongo.Document {
  to_id: string;
  from_id: string;
  amount: number;
  time: string;
}

export const IouModel: mongo.Model<IIou> = mongo.model<IIou>('Ious', iouSchema);
