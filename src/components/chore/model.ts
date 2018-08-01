import BaseChoreController from '../base-chore/controller';
import log from '../../log';
import { ChoreModel as Model, IChore } from './schema';

const ChoreModel = {
  get: async (id): Promise<IChore> => {
    log.verbose(`Getting chore ${id} in model`);
    return Model.findById(id);
  },

  getAll: async (): Promise<IChore[]> => {
    log.verbose('Getting all chores from model');
    return Model.find();
  },

  getFriendChores: async (friendId: string): Promise<IChore[]> => {
    log.verbose(`Getting all friendId ${friendId} from model`);
    return Model.find({
      doer_id: friendId,
    });
  },

  add: async ({ base_chore_id, doer_id, creator_id }): Promise<IChore> => {
    const chore = new Model({
      doer_id,
      creator_id,
      base_chore_id,
      status: 'assigned',
      assigned_date: (new Date()).getTime(),
    });

    return chore.save();
  },

  changeStatus: async (id: string, status: string): Promise<IChore> => {
    log.verbose(`Changing chore id ${id} status to ${status} in model`);
    return Model.findByIdAndUpdate(id, { status });
  },

  calcFriendPoints: async (friendId: string): Promise<number> => {
    const chores: IChore[] = await Model.find();
    const baseChores = await BaseChoreController.getAll();
    const myChores: IChore[] = chores.filter((chore) => chore.doer_id === friendId);
    const choreCount = myChores.reduce((record, chore) => {
      if (!record[chore.base_chore_id]) record[chore.base_chore_id] = 0;
      record[chore.base_chore_id]++;
      return record;
    }, {});

    const points: number = baseChores.reduce((pts, bChore) => {
      const count = choreCount[bChore._id] ? choreCount[bChore._id] : 0;
      return pts + count * bChore.points;
    }, 0);

    return points;
  },
};

export default ChoreModel;
