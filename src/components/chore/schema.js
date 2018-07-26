const { ChoreController } =  require('./controller');
const { BaseChoreController } =  require('../base-chore/controller');
const { FriendController } =  require('../friend/controller');

const ChoreType = `
  type ChoreType {
    id: String!,
    status: String,
    doer_id: String,
    chore_id: String,
    creator_id: String,
    base_chore_id: String!,
    name: String,
    points: Int,
    doer: FriendType,
    creator: FriendType
  }

  type Query {
    chore(id: String!): ChoreType,
    chores: [ChoreType]
  }

  type Mutation {
    changeStatus (
      id: String!,
      status: String!
    ): ChoreType,

    addChore(
      base_chore_id: String!,
      friend_id: String
    ): ChoreType
  }
`;

const ChoreResolvers = {
  ChoreType: {
    name: obj => BaseChoreController.get(obj, 'name'),
    points: obj => BaseChoreController.get(obj, 'points'),
    doer: obj => FriendController.get({friend_id: obj.doer_id}),
    creator: obj => FriendController.get({friend_id: obj.creator_id}),
  },
  Query: {
    chore: (_, args) => ChoreController.get(args),
    chores: () => ChoreController.getAll(),
  },
  Mutation: {
    changeStatus: (_, args) => ChoreController.changeStatus(args),
    addChore: (_, args) => ChoreController.add(args)
  }
}

module.exports = { ChoreType, ChoreResolvers }