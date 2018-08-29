import log from '../log';
import * as mongo from 'mongoose';

export interface IItem extends mongo.Document {
    name: string;
    quanity: number;
    quanityUnit: string;
    type: string;
}

class ItemController {
    private model: mongo.Model<IItem>;

    constructor() {
        const schema = new mongo.Schema({
            name: String,
            quanity: Number,
            quanityUnit: String,
            type: String,
        });
        this.model = mongo.model<IItem>('items', schema);
    }

    public add(name: string): Promise<IItem> {
        const newItem = new this.model({
            name,
            quanity: 0,
            quanityUnit: 'cans',
            type: 'food',
        });
        return newItem.save();
    }

    public async getById(itemId: string): Promise<IItem> {
        if (!itemId) {
            throw new Error('Malformed');
        }
        const item = this.model.findById(itemId);
        return item;
    }

    public async getItemName(itemId: string): Promise<string> {
        const item = await this.getById(itemId);
        return item.name;
    }

    public async getAll(): Promise<IItem[]> {
        return this.model.find();
    }
}

export const itemController = new ItemController();
