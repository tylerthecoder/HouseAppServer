
const uri = "mongodb+srv://Tyler_Tracy:tyler123@cluster0-pz7ea.mongodb.net/lounge621";
const mongoose = require('mongoose');
mongoose.connect(uri)

const db = mongoose.connection;

const friendSchema = mongoose.Schema({
    name: String,
    color: String,
    hash: String
})
const FriendModel = mongoose.model('Friends', friendSchema);

const choreSchema = mongoose.Schema({
    name: String,
    status: String,
    doer: String,
    points: Number,
    assignedData: Number
})
const ChoreModel = mongoose.model("Chores",choreSchema)


module.exports = {
    db,
    FriendModel,
    ChoreModel
}