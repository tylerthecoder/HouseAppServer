import { FriendModel } from './components/friend/schema';
import * as crypto from 'crypto';
import log from './log';
import FriendController from './components/friend/controller';

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

const genRandomString = (length: number): string => {
  return crypto.randomBytes(Math.ceil(length / 2))
          .toString('hex') /** convert to hexadecimal format */
          .slice(0, length);   /** return required number of characters */
};
const sha512 = (password: string, salt: string): string => {
  const hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
  hash.update(password);
  const value = hash.digest('hex');
  return value;
};

export const authenticate = (app) => {
  app.post('/login', async (res, req, next) => {
    // check credentials and then send an auth token
    const { user, pass } = req.param;
    const friend = await FriendModel.findOne({ friend_id: user });
    // unhash the password
    const hashedPassword = sha512(pass, friend.salt);
    if (hashedPassword === friend.hash) {
      // send along a random token for authentication
      const tokenBuffer = await crypto.randomBytes(48);
      const token = tokenBuffer.toString('hex');
      // store token in database;
      const wasStored = FriendController.updateToken(friend.friend_id, token);
      if (wasStored) {
        return res.status(202).send(token);
      } else {
        return next(new Error('Token not stored'));
      }
    } else {
      next(new Error('Password is incorrect'));
    }

  });
  app.post('/register', async (res, req, next) => {
    const { user, pass, confirmPass } = req.param;
    if (pass !== confirmPass) {
      return next(new Error('Passwords don\'t match'));
    }

    const isFriend = await FriendModel.find({ name: user });
    if (isFriend.length > 0) { // username alread exsits
      return next(new Error('Username already taken'));
    }

    const salt = genRandomString(16);
    const passwordHash = sha512(pass, salt);
    const friend = FriendController.create(user, passwordHash, '123', salt);
    if (friend) {
      return res.status(202).send('User created succufully');
    }
  });
};

export default CheckPass;
