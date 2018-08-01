import { IouModel as Model, IIou } from './schema';
import log from '../../log';

const iouModel = {

  get: async (id): Promise<IIou> => {
    log.verbose(`Getting iou id ${id} from model`);
    return Model.findById(id);
  },

  getAll: async (): Promise<IIou[]> => {
    log.verbose('Getting all ious from model');
    return Model.find();
  },

  add: (toId, fromId, amount): Promise<IIou> => {
    const iou = new Model({
      to_id: toId,
      from_id: fromId,
      amount,
      assigned_date: (new Date()).getTime(),
    });
    return iou.save();
  },

  ioWho: (friendId) => {
    const aggragation = [
      { $match: { from_id: friendId } },
    ];
    return Model.aggregate(aggragation);
  },

};

export default iouModel;
