import { IIou } from './schema';
import iouModel from './model';
import log from '../../log';
import { ENGINE_METHOD_ALL } from 'constants';

const iouController = {
  get: ({ id }): Promise<IIou> => {
    log.verbose(`Getting iou id ${id} from controller`);
    if (!id) {
      throw new Error('get IOU malformed');
    }
    return iouModel.get(id);
  },

  getAll: (): Promise<IIou[]> => {
    log.verbose('Getting all ious from controller');
    return iouModel.getAll();
  },

  add: ({ to_id, from_id, amount }): Promise<IIou> => {
    if (!to_id || !from_id) {
      throw new Error('add IOU malformed');
    }
    return iouModel.add(to_id, from_id, amount);
  },

  ioWho: async (friendId: string): Promise<IIou[]> => {
    // calculate how much I own each friend
    const iowho = await iouModel.ioWho(friendId);
    const whoome = await iouModel.whoome(friendId);
    const myIousReduced = {};
    iowho.forEach((iou) => { // everyone who you owe
      if (myIousReduced[iou.to_id]) {
        myIousReduced[iou.to_id] += iou.amount;
      } else {
        myIousReduced[iou.to_id] = iou.amount;
      }
    });
    whoome.forEach((iou) => { // everyone you owe
      if (myIousReduced[iou.from_id]) {
        myIousReduced[iou.from_id] -= iou.amount;
      } else {
        myIousReduced[iou.from_id] = -iou.amount;
      }
    });



    const newIous = Object.keys(myIousReduced).map((toId) => {
      const iou = {
        to_id: toId,
        from_id: friendId,
        amount: myIousReduced[toId],
      } as IIou;
      return iou;
    });

    return newIous;
  },

};

export default iouController;
