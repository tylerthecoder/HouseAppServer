const { iouController } = require('./controller');

const IouType = `
  type IouType {
    id: String!,
    to_id: String!,
    from_id: String!,
    amount: Float!,
    time: String
  }

  type Query {
    iou(id: String!): IouType,
    ious: [IouType]
  }

  type Mutation {
    addIou(
      to_id: String!,
      from_id: String!,
      amount: Float!
    ): IouType
  }
`;

const IouResolvers = {
  IouType: {
  },
  Query: {
    iou: (_, args) => iouController.get(args),
    ious: () => {
      console.log('Getting all IOUs');
      return iouController.getAll();
    },

  },
  Mutation: {
    addIou: (_, args) => iouController.add(args),
  },
};

module.exports = { IouType, IouResolvers };
