const uri = 'mongodb+srv://Tyler_Tracy:tyler123@cluster0-pz7ea.mongodb.net/lounge621';
const mongoose = require('mongoose');

mongoose.connect(uri);
const iouSchema = mongoose.Schema({
  to_id: String,
  from_id: String,
  amount: Number,
  time: String,
});
const Model = mongoose.model('Ious', iouSchema);

const iouModel = {
  get: id => Model.findById(id),

  getAll: () => Model.find(),

  add: (toId, fromId, amount) => {
    const iou = new Model({
      to_id: toId,
      from_id: fromId,
      amount,
      assigned_date: (new Date()).getTime(),
    });
    return iou.save();
  },

  ioWho: (friendId) => {
    const aggragation = [
      { $match: { from_id: friendId } },
    ];
    return Model.aggregate(aggragation);
  },
};

module.exports = { iouModel };
