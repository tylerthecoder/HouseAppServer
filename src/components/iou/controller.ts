import { IIou } from './schema';
import iouModel from './model';
import log from '../../log';

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

  add: ({ toFriend_id, fromFriend_id, amount }): Promise<IIou> => {
    if (!toFriend_id || !fromFriend_id) {
      throw new Error('add IOU malformed');
    }
    return iouModel.add(toFriend_id, fromFriend_id, amount);
  },

  ioWho: (friendId) => {
    // calculate how much I own each friend
  },

};

export default iouController;
