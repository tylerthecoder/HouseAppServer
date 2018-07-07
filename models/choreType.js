const uri = "mongodb+srv://Tyler_Tracy:tyler123@cluster0-pz7ea.mongodb.net/lounge621";
const mongoose = require('mongoose');
mongoose.connect(uri)
const choreTypeSchema = mongoose.Schema({
    name: String,
    points: Number,
})
const Model = mongoose.model("ChoreType",choreTypeSchema)
module.exports = {
    Model
}
