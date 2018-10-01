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

  type ItemType {
    id: String!,
    name: String!,
    quantity: Int
    quantityUnit: String,
    type: String,
  }

  type Query {
    suggestedItem(str: String): [ItemType],
    shoppingList: [ListItemType],
    allListItems: [ListItemType],
  }

  type Mutation {
    addItemToList(
      itemName: String,
      notes: String,
    ): ListItemType,
    removeListItem(
      listItemId: String!,
      friendId: String,
    ): Boolean
  }
`;

export const mainResolvers = {
  ListItemType: {
    name: (self) => itemController.getItemName(self.itemId),
  },
  Query: {
    suggestedItem: (_, args) => itemController.suggestItems(args.str),
    shoppingList: (_, args) => shoppingListController.getList(),
  },
  Mutation: {
    addItemToList: (_, args) => {
      console.log('WTF');
      shoppingListController.addItemByName(args.itemName, args.notes);
    },
    removeListItem: (_, args) => shoppingListController.removeItem(args.listItemId),
  },
};
