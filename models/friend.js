const uri = "mongodb+srv://Tyler_Tracy:tyler123@cluster0-pz7ea.mongodb.net/lounge621";
const mongoose = require('mongoose');
mongoose.connect(uri)
const friendSchema = mongoose.Schema({
    name: String,
    color: String,
    hash: String,
    friend_id: String
})
const FriendModel = mongoose.model('Friends', friendSchema);
module.exports = {
    FriendModel
}