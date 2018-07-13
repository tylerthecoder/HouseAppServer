const { BaseChoreModel } = require('./model');

const BaseChoreController = {
  get: ({ base_chore_id }, prop = null) => {
    if (!base_chore_id) {
      throw new Error('Malformed');
    }
    return BaseChoreModel.get(base_chore_id, prop);
  },

  getAll: () => {
    return BaseChoreModel.getAll()
  },

  add: ({ name, points, friend}) => {
    if (!name || !points || !friend) {
      throw new Error('Malformed');
    }
    return BaseChoreModel.add(name, points, friend);
  }
}

module.exports = { BaseChoreController }