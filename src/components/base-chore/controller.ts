import log from '../../log';
import BaseChoreModel from './model';
import { IBaseChore } from './schema';

const BaseChoreController = {

  get: ({ base_chore_id: baseChoreId }, prop = null): Promise<IBaseChore> => {
    log.verbose(`Getting base chore id ${baseChoreId} from controller`);
    if (!baseChoreId) {
      throw new Error('Malformed');
    }
    return BaseChoreModel.get(baseChoreId, prop);
  },

  getAll: (): Promise<IBaseChore[]> => {
    log.verbose('Getting all base chores from controller');
    return BaseChoreModel.getAll();
  },

  add: ({ name, points, friend}): Promise<IBaseChore> => {
    log.verbose(`Creating base chore with name: ${name}, points: ${points}, creator: ${friend}`);
    if (!name || !points || !friend) {
      throw new Error('Malformed');
    }
    return BaseChoreModel.add(name, points, friend);
  },

};

export default BaseChoreController;
