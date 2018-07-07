const uniqid = require('uniqid');
const { ChoreModel } = require('../models/chore')
const { GetFriends } = require('./friends.js')

const getMyChores = (req,res) => {
    ChoreModel.find({doerId:req.query.name})
    .then(x =>{
        res.end(JSON.stringify(x))
    })
    .catch (err => {
        res.end("ERROR: " + err)
        console.log("ERROR: " + err)
    })
}

const getMyPoints = (req,res) => {
    const doer = req.query.name;
    ChoreModel.aggregate([
        { $match: {
            doer
        }},
        { $group: {
            _id: "$doer",
            points: { $sum: "$points" }
        }}
    ])
    .then(([{points}]) => {
        res.end(String(points));
    })
}


const AddChore = (name, points, creator_id, notes = "") => {
    //might add a bunch of other params that I cant think of right now

    //maybe check to see if chore doesn't exsist
    //now assign the chore
    return GetFriends()
    .then((friends) => {
        const allPointsPromises = friends.map(friend => ChoreModel.aggregate([
            { $match: {
                doer_id: friend.id
            }},
            { $group: {
                _id: "$doer_id",
                points: {$sum: "$points"}
            }}
        ]));
        return Promise.all(allPointsPromises);
    })
    .then((friendPointTotal) => {
        const doer_id = friendPointTotal.reduce((acc, cur) => {
            return cur[0] ? cur[0].points <= acc.points ? cur[0] : acc : acc;
        }, {points:Infinity} )._id;
        const chore = new ChoreModel({
            name,
            points,
            doer_id,
            creator_id,
            status:"assigned",
            assigned_date:(new Date).getTime(),
            chore_id: uniqid()
        })
        return chore.save();
    })
    .catch(err => {
        return new Error(err);
    })

}

const completeChore = (req,res) => {
    const choreId = req.query.choreId;

    //maybe check to see if chore doesn't exsist

    ChoreModel.findOne({_id:choreId})
    .then((chore) => {
        chore.status = "completed";
        chore.completeDate = (new Date()).getTime();
        return chore.save();
    })
    .then(() => {
        res.end("Sucess");
    })
    .catch((err) => {
        console.log('Error completeing chore: ' + err);
    })
}

const verifyChore = (req,res) => {

}

module.exports = {
    getMyChores,
    AddChore,
    getMyPoints,
    completeChore,
    verifyChore
}