const { BaseChoreController } =  require('./controller');

const BaseChoreType = `
  type BaseChoreType {
    id: String!,
    name: String!,
    points: Int!,
  }

  type Query {
    baseChores: [BaseChoreType],
  }

  type Mutation {
    addBaseChore(
      name: String,
      points: Int
    ) : BaseChoreType
  }
`

const BaseChoreResolvers = {
  Query: {
    baseChores: () => BaseChoreController.getAll()
  },
  Mutation: {
    addBaseChore: (_, args) => BaseChoreController.add(args)
  }
}

module.exports = { BaseChoreType, BaseChoreResolvers }
