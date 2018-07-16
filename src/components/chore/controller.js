const { ChoreModel } = require('./model');
const { FriendController } = require('../friend/controller');

const ChoreController = {
  get: ({ id }) => {
    if (!id) {
      throw new Error('getChore Malformed')
    }
    return ChoreModel.get(id);
  },

  getAll: () => {
    return ChoreModel.getAll();
  },

  getFriendChores: ({ friend_id }) => {
    if (!friend_id) {
      throw new Error('getFriendChores Malformed');
    }
    return ChoreModel.getFriendChores(friend_id);
  },

  add: async ({ base_chore_id, friend_id}) => {
    if (!base_chore_id, !friend_id) {
      throw new Error('Malformed');
    }
    const friends = await FriendController.getAll();

    const pointPromises = friends.map(friend => ChoreModel.calcFriendPoints(friend.friend_id));

    const friendPointTotal = await Promise.all(pointPromises);

    const doer_id = friendPointTotal.reduce((acc, cur) => {
      return cur.points <= acc.points ? cur : acc;
    }, {points:Infinity} ).friend_id;

    return await ChoreModel.add({ base_chore_id, doer_id, creator_id: friend_id });
  },

  changeStatus: ({ id, status }) => {
    if (!id || !status) {
      throw new Error('Malformed')
    }

    const stati = ['assigned', 'completed', 'verified'];

    if (stati.indexOf(status) === -1) {
      throw new Error('Status is Invalid');
    }
    console.log(id, status);
    return ChoreModel.changeStatus(id, status)

  }
}

module.exports = { ChoreController }
