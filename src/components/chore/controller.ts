import ChoreModel from './model';
import FriendController from '../friend/controller';
import { IFriend } from '../friend/schema';
import log from '../../log';
import { IChore } from './schema';

const ChoreController = {

  get: async ({ id }): Promise<IChore> => {
    log.verbose(`Getting chore id ${id} from controller`);
    if (!id) {
      throw new Error('getChore Malformed');
    }
    return ChoreModel.get(id);
  },

  getAll: (): Promise<IChore[]> => {
    log.verbose('Getting all chores from controller');
    return ChoreModel.getAll();
  },

  getFriendChores: ({ friend_id }): Promise<IChore[]> => {
    log.verbose(`Getting chores for friend id ${friend_id} from controller`);
    if (!friend_id) {
      throw new Error('getFriendChores Malformed');
    }
    return ChoreModel.getFriendChores(friend_id);
  },

  add: async ({ base_chore_id, friend_id}) => {
    if (!base_chore_id && !friend_id) {
      throw new Error('Malformed');
    }
    const friends: IFriend[] = await FriendController.getAll();

    const friendPoints: number[] = await Promise.all(
      friends.map((friend) => ChoreModel.calcFriendPoints(friend.friend_id)),
    );

    friends.forEach((friend, index) => {
      friend.points = friendPoints[index];
    });

    const doerId = friends.reduce((best, friend) => {
      return friend.points <= best.points ? friend : best;
    }).friend_id;

    return await ChoreModel.add({ base_chore_id, doer_id: doerId, creator_id: friend_id });
  },

  changeStatus: ({ id, status }) => {
    log.verbose(`Chaning chore status to ${status} on id ${id}`);
    if (!id || !status) {
      throw new Error('Malformed');
    }

    const stati = ['assigned', 'completed', 'verified'];

    if (stati.indexOf(status) === -1) {
      throw new Error('Status is Invalid');
    }
    return ChoreModel.changeStatus(id, status);

  },
};

export default ChoreController;
