const uri = "mongodb+srv://Tyler_Tracy:tyler123@cluster0-pz7ea.mongodb.net/lounge621";
const mongoose = require('mongoose');
mongoose.connect(uri)
const friendSchema = mongoose.Schema({
    name: String,
    color: String,
    hash: String,
    friend_id: String
})

const Model = mongoose.model('Friends', friendSchema);

const FriendModel = {
  get: (friend_id) => {
    return Model.findOne({ friend_id })
  },

  getAll: () => {
    return Model.find();
  },
}

module.exports = { FriendModel, Model };
