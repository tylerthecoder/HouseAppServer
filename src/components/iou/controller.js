const { iouModel } = require('./model');

const iouController = {
  get: ({ id }) => {
    if (!id) {
      throw new Error('get IOU malformed')
    }

    return iouModel.get(id);
  },

  getAll: () => {
    console.log('Getting all IOUs');
    return iouModel.getAll();
  },

  add: ({ toFriend_id, fromFriend_id, amount }) => {
    if (!toFriend_id || !fromFriend_id) {
      throw new Error('add IOU malformed');
    }
    return iouModel.add(toFriend_id, fromFriend_id, amount);
  },

  ioWho: (friend_id) => {
    // calculate how much I own each friend
  },

};

module.exports = { iouController };
