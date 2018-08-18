import { IouModel, IIou } from './model';
import log from '../../log';

const iouController = {
  get: ({ id }): Promise<IIou> => {
    log.verbose(`Getting iou id ${id} from controller`);
    if (!id) {
      throw new Error('get IOU malformed');
    }
    return IouModel.get(id);
  },

  getAll: (): Promise<IIou[]> => {
    log.verbose('Getting all ious from controller');
    return IouModel.getAll();
  },

  add: ({ to_id, from_id, amount }): Promise<IIou> => {
    if (!to_id || !from_id) {
      throw new Error('add IOU malformed');
    }
    return IouModel.add(to_id, from_id, amount);
  },

  ioWho: async (friendId: string): Promise<IIou[]> => {
    // calculate how much I own each friend
    const iowho = await IouModel.ioWho(friendId);
    const whoome = await IouModel.whoome(friendId);
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

  split: (payerId: string, amount: number, nonPayers: string[]): boolean => {
    const numOfPeople = nonPayers.length + 1;
    const splitAmount = amount / numOfPeople;
    nonPayers.forEach((nonPayerId) => {
      IouModel.add(payerId, nonPayerId, splitAmount);
    });
    return true;
  },

};

export default iouController;
