const { Model } = require('./components/friend/model.js');

const CheckPass = (req,res) => { //very very very bad way of doing this. Change this later
  const pass = req.query.password;
  const whoami = req.query.friend_id;
  Model.findOne({friend_id:whoami})
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
  CheckPass
}