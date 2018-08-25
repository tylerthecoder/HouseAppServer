import ShoppingListController from './controller';
import FriendController from '../friend/controller';

export const ListItemType = `
  type ListItemType {
    id: String!,
    name: String!,
    got: Boolean!,
    adder_id: String!,
    added_time: Sring!,
    adder: FriendType,
    getter_id: String!,
    get_time: String!,
    getter: FriendType
  }

  type Query {
    shoppingList: [ListItemType],
    allListItems: [ListItemType]
  }

  type Mutation {
    addListItem(
      friendId: String!,
      itemName: String!,
    ): ListItemType,

    getListItem(
      itemId: String!,
      friendId: String!,
    ): Boolean
  }
`;

export const IouResolvers = {
  IouType: {
    adder: (obj) => FriendController.get({ friend_id: obj.adder_id }),
    getter: (obj) => FriendController.get({ friend_id: obj.getter_id }),
  },
  Query: {
    shoppingList: (_, args) => ShoppingListController.getList(args),
    allListItems: () => iouController.getAll(),
  },
  Mutation: {
    addIou: (_, args) => iouController.add(args),
    splitCost: (_, args) => iouController.split(args.payerId, args.amount, args.nonPayers, args.reason),
  },
};
