const uri = "mongodb+srv://Tyler_Tracy:tyler123@cluster0-pz7ea.mongodb.net/lounge621";
const mongoose = require('mongoose');
mongoose.connect(uri);
const choreSchema = mongoose.Schema({
    doer_id: String,
    creator_id: String,
    base_chore_id: String,
    status: String,
    assigned_date: Number,
})
const Model = mongoose.model("Chores",choreSchema);

const { BaseChoreController } =  require('../base-chore/controller');

const ChoreModel = {
    get: (id) => {
        return Model.findById(id)
    },

    getAll: () => {
        return Model.find();
    },

    getFriendChores: (friend_id) => {
        return Model.find({ doer_id: friend_id });
    },

    add: ({ base_chore_id, doer_id, creator_id }) => {
        const chore = new Model({
            doer_id,
            creator_id,
            base_chore_id,
            status:"assigned",
            assigned_date:(new Date).getTime(),
          })

          return chore.save();
    },

    changeStatus: (id, status) => {
        return Model.findByIdAndUpdate(id, {status});
    },

    calcFriendPoints: async (friend_id) => {
        const chores = await Model.find();
        const baseChores = await BaseChoreController.getAll();
        const myChores = chores.filter(chore => chore.doer_id === friend_id);
        const choreCount = myChores.reduce((record,chore) => {
            if (!record[chore.base_chore_id]) record[chore.base_chore_id] = 0;
            record[chore.base_chore_id]++;
            return record
        },{});

        const points = baseChores.reduce((points, bChore) => {
            return points + choreCount[bChore._id] * bChore.points
        },0)

        return {
            points: points || 0,
            friend_id
        }
    }
}
module.exports = { ChoreModel }