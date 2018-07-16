const { FriendController } =  require('./controller');
const { ChoreController } =  require('../chore/controller');

const FriendType = `
  type FriendType {
    name: String!,
    color: String!,
    hash: String!,
    friend_id: String!,
    points: Int,
    chores: [ChoreType],
  }

  type Query {
    friend (friend_id: String): FriendType,
    friends: [FriendType]
  }
`

const FriendResolvers = {
  FriendType: {
    points: (obj) => FriendController.calcPoints(obj),
    chores: (obj) => ChoreController.getFriendChores(obj),
  },

  Query: {
    friend: (_, args) => FriendController.get(args),
    friends: () => FriendController.getAll(),
  }
}

module.exports = { FriendType, FriendResolvers }
