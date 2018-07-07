const { FriendModel } = require('../models/friend');

//TODO: memozie this function
const GetFriends = () => {
    return FriendModel.find()
    .then(x => x.map(friend => ({
        name: friend.name,
        color: friend.color,
        id: friend.friend_id
    })))
    .catch(err => console.log(err))
}

const CheckPass = (req,res) => { //very very very bad way of doing this. Change this later
    const pass = req.query.password;
    const whoami = req.query.friend_id;
    FriendModel.findOne({friend_id:whoami})
    .then(friend => {
        if (friend.hash == pass) {
            res.status(202).send("Success");
        } else {
            res.status(500).send("Wrong password");
        }
    })
    .catch(err => res.status(500).send(err))
}


module.exports = {
    GetFriends,
    CheckPass
}