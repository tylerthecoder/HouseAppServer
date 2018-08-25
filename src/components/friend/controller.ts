import FriendModel from './model';
import ChoreModel from '../chore/model';
import { IFriend } from './model';
import log from '../../log';

const FriendController = {
  get: ({ friend_id }): Promise<IFriend> => {
    log.verbose(`Getting friend ${friend_id} from controller`);
    if (!friend_id) {
      throw new Error('GetFriend Malformed');
    }
    return FriendModel.get(friend_id);
  },

  getAll: (): Promise<IFriend[]> => {
    log.verbose('Getting all friends from controller');
    return FriendModel.getAll();
  },

  updateToken: (friendId: string, token: string): Promise<boolean> => {
    log.verbose(`FriendController updateToken| friendId:${friendId}, token:${token}`)
    if (!friendId || !token) {
      throw new Error('FriendController UpdateFriend malformed.');
    };
    return FriendModel.setToken(friendId, token);
  },

  create: (name: string, passwordHash: string, houseId: string, salt: string): Promise<IFriend> => {
    log.verbose('Creating a friend');
    return FriendModel.create(name, houseId, passwordHash, salt);
  },

  calcPoints: async ({ friend_id }): Promise<number> => {
    if (!friend_id) {
      throw new Error('Malformed');
    }
    const points = await ChoreModel.calcFriendPoints(friend_id);
    return points;
  },
};

export default FriendController;
