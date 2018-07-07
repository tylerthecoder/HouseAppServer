const uri = "mongodb+srv://Tyler_Tracy:tyler123@cluster0-pz7ea.mongodb.net/lounge621";
const mongoose = require('mongoose');
mongoose.connect(uri)
const choreSchema = mongoose.Schema({
    name: String,
    status: String,
    doer_id: String,
    points: Number,
    assigned_date: Number,
    chore_id: String,
    creator_id: String
})
const ChoreModel = mongoose.model("Chores",choreSchema)
module.exports = {
    ChoreModel
}