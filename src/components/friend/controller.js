const { FriendModel } = require('./model');
const { ChoreModel } = require('../chore/model');

const FriendController = {
  get: ({ friend_id }) => {
    if (!friend_id) {
      throw new Error('GetFriend Malformed');
    }
    return FriendModel.get(friend_id);
  },

  getAll: () => {
    return FriendModel.getAll();
  },

  calcPoints: async ({ friend_id }) => {
    if (!friend_id) {
      throw new Error('Malformed');
    }
    const points = await ChoreModel.calcFriendPoints(friend_id);
    return points.points;
  }
}

module.exports = { FriendController };