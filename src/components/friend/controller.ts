import FriendModel from './model';
import ChoreModel from '../chore/model';
import { IFriend } from './schema';
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

  calcPoints: async ({ friend_id }): Promise<number> => {
    if (!friend_id) {
      throw new Error('Malformed');
    }
    const points = await ChoreModel.calcFriendPoints(friend_id);
    return points;
  },
};

export default FriendController;
