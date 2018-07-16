const uri = "mongodb+srv://Tyler_Tracy:tyler123@cluster0-pz7ea.mongodb.net/lounge621";
const mongoose = require('mongoose');
mongoose.connect(uri);
const baseChoreSchema = mongoose.Schema({
    name: String,
    points: Number,
    created_date: Number,
})

const Model = mongoose.model("base-chores",baseChoreSchema);

const BaseChoreModel = {
    get: (base_chore_id, props) => {
        return Model.findById(base_chore_id, props)
        .then(baseChore => {
          if (props) return baseChore[props];
          return baseChore;
        })
    },

    getAll: () => {
        return Model.find();
    },

    add: (name, points, friend) => {
      const baseChore = new Model({
        name,
        points,
        creator_id: friend,
        created_date: (new Date).getTime(),
      });
      return baseChore.save();
    }
}

module.exports = { BaseChoreModel };