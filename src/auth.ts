import { FriendModel } from './components/friend/schema';
import log from './log';

const CheckPass = (req, res): void => {
  const { pass, whoami } = req.query;
  FriendModel.findOne({ friend_id: whoami })
    .then((friend) => {
      if (friend.hash === pass) {
        res.status(202).send('Success');
      } else {
        res.status(500).send('Inncorrect password');
      }
    })
    .catch((err) => {
      log.info('Error while trying to log in' + err);
      res.status(500).send('Error Logging in');
    });
};

export default CheckPass;
