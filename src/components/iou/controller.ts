import { IouModel, IIou } from './model';
import log from '../../log';

const iouController = {
  get: ({ id }): Promise<IIou> => {
    log.verbose(`IouController| id: ${id}`);
    if (!id) {
      throw new Error('get IOU malformed');
    }
    return IouModel.get(id);
  },

  getAll: (): Promise<IIou[]> => {
    log.verbose('IouController getAll');
    return IouModel.getAll();
  },

  add: ({ to_id, from_id, amount, reason }): Promise<IIou> => {
    log.verbose(`IouController add| to_id: ${to_id} from_id: ${from_id} amount: ${amount}`);
    if (!to_id || !from_id) {
      throw new Error('add IOU malformed');
    }
    return IouModel.add(to_id, from_id, amount, reason);
  },

  allMyIous: async (friendId: string): Promise<IIou[]> => {
    log.verbose(`IouController allMyIous| friendId: ${friendId}`);

    // calculate how much I own each friend
    const iowho = await IouModel.ioWho(friendId);
    const whoome = await IouModel.whoome(friendId);
    const allIous = iowho.concat(whoome).sort((iou1, iou2) => {
      const time1 = parseInt(iou1.time, 10);
      const time2 = parseInt(iou2.time, 10);
      return time2 - time1;
    });
    return allIous;
  },

  ioWho: async (friendId: string): Promise<IIou[]> => {
    log.verbose(`IouController ioWho| friendId: ${friendId}`);
    // calculate how much I own each friend
    const iowho = await IouModel.ioWho(friendId);
    const whoome = await IouModel.whoome(friendId);
    const myIousReduced = {};
    iowho.forEach((iou) => { // everyone who has paid you
      if (myIousReduced[iou.to_id]) {
        myIousReduced[iou.to_id] += iou.amount;
      } else {
        myIousReduced[iou.to_id] = iou.amount;
      }
    });
    whoome.forEach((iou) => { // everyone who you have paid
      if (myIousReduced[iou.from_id]) {
        myIousReduced[iou.from_id] -= iou.amount;
      } else {
        myIousReduced[iou.from_id] = -iou.amount;
      }
    });

    const newIous = Object.keys(myIousReduced).map((fromId) => {
      const iou = {
        to_id: friendId,
        from_id: fromId,
        amount: myIousReduced[fromId],
      } as IIou;
      return iou;
    });

    return newIous;
  },

  split: (payerId: string, amount: number, nonPayers: string[], reason: string): boolean => {
    log.verbose(`IouController split| payerId:${payerId} amount:${amount} nonPayer:${nonPayers}`);
    const numOfPeople = nonPayers.length + 1;
    const splitAmount = amount / numOfPeople;
    nonPayers.forEach((nonPayerId) => {
      IouModel.add(nonPayerId, payerId, splitAmount, reason);
    });
    return true;
  },

};

export default iouController;
