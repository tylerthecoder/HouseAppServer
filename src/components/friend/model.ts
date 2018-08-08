import log from '../../log';
import { FriendModel as Model, IFriend } from './schema';

const FriendModel = {
  get: async (friendId): Promise<IFriend> => {
    log.verbose(`Getting friend ${friendId} in model`);
    return Model.findOne({ friend_id: friendId });
  },

  getAll: async (): Promise<IFriend[]> => {
    log.verbose('Getting all friends from model');
    return Model.find();
  },
};

export default FriendModel;
