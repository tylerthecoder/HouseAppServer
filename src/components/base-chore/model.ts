import log from '../../log';
import { BaseChoreModel as Model, IBaseChore } from './schema';

const BaseChoreModel = {

  get: async (baseChoreId: string, prop: string): Promise<IBaseChore> => {
    log.verbose(`Getting base chore id ${baseChoreId} from model`);
    return Model.findById(baseChoreId, prop)
      .then((baseChore) => {
        if (prop) return baseChore[prop];
        return baseChore;
      });
  },

  getAll: async (): Promise<IBaseChore[]> => {
    log.verbose('Getting all base chores from model');
    return Model.find();
  },

  add: (name: string, points: number, friend: string): Promise<IBaseChore> => {
    const baseChore = new Model({
      name,
      points,
      creator_id: friend,
      created_date: (new Date()).getTime(),
    });
    return baseChore.save();
  },

};

export default BaseChoreModel;
