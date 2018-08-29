import { itemController } from './item';
import { shoppingListController } from './shoppingList';

export const mainSchema = `
  type ListItemType {
    id: String!,
    name: String!,
    itemId: String!,
    aquired: Boolean,
    notes: String!,
    mealId: Boolean!,
  }

  type Query {
    shoppingList: [ListItemType],
    allListItems: [ListItemType]
  }

  type Mutation {
    addItemToList(
      itemId: String!,
      notes: String!,
      mealId: String,
    ): ListItemType,

    addNewItemToList(
      itemName: String!,
      notes: String,
      mealId: String,
    ): ListItemType,

    getListItem(
      itemId: String!,
      friendId: String!,
    ): Boolean
  }
`;

export const mainResolvers = {
  ListItemType: {
    name: (self) => itemController.getItemName(self.itemId),
  },
  Query: {
    shoppingList: (_, args) => shoppingListController.getList(),
  },
  Mutation: {
    addItemToList: (_, args) => shoppingListController.add(args.itemId, args.notes, args.mealId),
    addNewItemToList: (_, args) => shoppingListController.addNewItem(args.itemName, args.notes, args.mealId),
  },
}