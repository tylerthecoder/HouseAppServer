import { FriendModel } from './components/friend/schema';

const CheckPass = (req, res): void => {
  const { pass, whoami } = req.query;
  FriendModel.findOne({ friend_d: whoami })
    .then((friend) => {
      if (friend.hash === pass) {
        res.status(202).send('Sucess');
      } else {
        res.status(500).send('Wrong password');
      }
    });
};

export default CheckPass;
