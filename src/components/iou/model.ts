import log from '../../log';
import * as mongo from 'mongoose';

export interface IIou extends mongo.Document {
  to_id: string;
  from_id: string;
  amount: number;
  time: string;
}

const iouSchema = new mongo.Schema({
  to_id: String,
  from_id: String,
  amount: Number,
  time: String,
});

const mongoModel: mongo.Model<IIou> = mongo.model<IIou>('Ious', iouSchema);

export const IouModel = {

  get: async (id): Promise<IIou> => {
    log.verbose(`Getting iou id ${id} from model`);
    return mongoModel.findById(id);
  },

  getAll: async (): Promise<IIou[]> => {
    log.verbose('Getting all ious from model');
    return mongoModel.find();
  },

  add: (toId, fromId, amount): Promise<IIou> => {
    const iou = new mongoModel({
      to_id: toId,
      from_id: fromId,
      amount,
      assigned_date: (new Date()).getTime(),
    });
    return iou.save();
  },

  ioWho: async (friendId): Promise<IIou[]> => {
    return mongoModel.find({
      from_id: friendId,
    });
  },

  whoome: async (friendId): Promise<IIou[]> => {
    return mongoModel.find({
      to_id: friendId,
    });
  },
};
