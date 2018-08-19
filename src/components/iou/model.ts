import log from '../../log';
import * as mongo from 'mongoose';

export interface IIou extends mongo.Document {
  to_id: string;
  from_id: string;
  amount: number;
  reason: string;
  time: string;
}

const iouSchema = new mongo.Schema({
  to_id: String,
  from_id: String,
  amount: Number,
  reason: String,
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

  add: (toId, fromId, amount, reason): Promise<IIou> => {
    log.verbose(`Adding IOU of ${amount} to ${toId} from ${fromId} to model`);
    const iou = new mongoModel({
      to_id: toId,
      from_id: fromId,
      amount,
      reason,
      time: (new Date()).getTime(),
    });
    return iou.save();
  },

  ioWho: async (friendId): Promise<IIou[]> => {
    log.verbose(`Getting friend ${friendId}s iowho`);
    return mongoModel.find({
      from_id: friendId,
    });
  },

  whoome: async (friendId): Promise<IIou[]> => {
    log.verbose(`Getting friend ${friendId}s whoome`);
    return mongoModel.find({
      to_id: friendId,
    });
  },
};
