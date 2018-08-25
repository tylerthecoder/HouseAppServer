import log from '../../log';
import uniqid from 'uniqid';
import * as mongo from 'mongoose';

export interface IFriend extends mongo.Document {
  name: string;
  color?: string;
  hash: string;
  salt: string;
  houseId: string;
  friend_id: string;
  points?: number;
}

const FriendSchema = new mongo.Schema({
  name: String,
  color: String,
  hash: String,
  friend_id: String,
  salt: String,
});

const mongoModel: mongo.Model<IFriend> = mongo.model<IFriend>('Friends', FriendSchema);

const FriendModel = {
  get: async (friendId): Promise<IFriend> => {
    log.verbose(`Getting friend ${friendId} in model`);
    return mongoModel.findOne({ friend_id: friendId });
  },

  getAll: async (): Promise<IFriend[]> => {
    log.verbose('Getting all friends from model');
    return mongoModel.find();
  },

  setToken: async (friendId: string, token: string): Promise<boolean> => {
    const friend = mongoModel.updateOne(
      {friend_id: friendId},
      { $set: { token }},
    );
    return Boolean(friend);
  },

  create: async (name: string, houseId: string, passwordHash: string, salt: string) => {
    const friend = new mongoModel({
      name,
      houseId,
      passwordHash,
      salt,
      friend_id: uniqid(),
    });
    return friend.save();
  },
};

export default FriendModel;
