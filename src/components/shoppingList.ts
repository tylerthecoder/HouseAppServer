import log from '../log';
import * as mongo from 'mongoose';
import {itemController } from './item';

interface IListItem extends mongo.Document {
    itemId: string;
    aquired: boolean;
    notes: string;
    mealId: string;
}

export class ShoppingListController {
    private model: mongo.Model<IListItem>;

    constructor() {
        const schema = new mongo.Schema({
            itemId: String,
            aquired: Boolean,
            notes: String,
            mealId: String,
        });
        this.model = mongo.model<IListItem>('shopping-list-items', schema);
    }

    public async addNewItem(itemName: string, notes: string, mealId?: string): Promise<IListItem> {
       const item = await itemController.add(itemName);
       const newListItem = new this.model({
           itemId: item.id,
           notes,
           mealId: false,
           aquired: false,
       });
       return newListItem.save();
    }

    public add(itemId: string, notes: string, mealId?: string): Promise<IListItem> {
        // add list item to database
        log.verbose(`ShoppingListController add| itemId:${itemId}, notes:${notes}, mealId:${mealId}`);
        const item = new this.model({
            itemId,
            notes,
            mealId,
            aquired: false,
        });
        return item.save();
    }

    public async getItem(listItemId: string): Promise<IListItem> {
        if (!listItemId) {
            throw new Error('getItem malformed');
        }
        return this.model.findById(listItemId);
    }

    public removeItem(listItemId: string) {
       if (!listItemId) {
           throw new Error('remove malformed');
       }
       return this.model.remove({ _id: listItemId });
    }

    public removeAll() {
        log.verbose('Removing all documents from shopping list');
    }

    public async changeNotes(listItemId: string, newNotes: string): Promise<IListItem> {
        if (listItemId || !newNotes) {
            throw new Error('changeNotes Malformed');
        }
        return this.model.findByIdAndUpdate(
            listItemId,
            {
                $set: { notes: newNotes },
            },
        );
    }

    public async getList(): Promise<IListItem[]> {
        log.verbose('Getting Shopping List');
        return this.model.find();
    }
}

export const shoppingListController = new ShoppingListController();
