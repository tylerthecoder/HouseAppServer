import log from '../log';
import * as mongo from 'mongoose';

export interface IItem extends mongo.Document {
    name: string;
    lowerName: string;
    quanity: number;
    quanityUnit: string;
    type: string;
}

class ItemController {
    private model: mongo.Model<IItem>;
    private NSuggestedItem: number;

    constructor() {
        const schema = new mongo.Schema({
            name: String,
            lowerName: String,
            quanity: Number,
            quanityUnit: String,
            type: String,
        });
        this.model = mongo.model<IItem>('items', schema);
        this.NSuggestedItem = 5;
    }

    public add(name: string): Promise<IItem> {
        const newItem = new this.model({
            name,
            lowerName: name.toLocaleLowerCase(),
            quanity: 0,
            quanityUnit: 'cans',
            type: 'food',
        });
        return newItem.save();
    }

    public async suggestItems(str: string): Promise<IItem[]> {
        log.verbose('Suggest Items');
        const items = await this.getAll();
        return items.filter((item) => {
            return item.name.toLocaleLowerCase().includes(str.toLocaleLowerCase());
        })
        .slice(0, this.NSuggestedItem);
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

    public async findItemByName(itemName: string): Promise<IItem> {
        const name = itemName.toLocaleLowerCase();
        return this.model.findOne({ lowerName: name });
    }

    public async itemWithNameExists(itemName: string): Promise<boolean> {
        const name = itemName.toLocaleLowerCase();
        const items = await this.model.find({ lowerName: name });
        return items.length !== 0;
    }

    public async getAll(): Promise<IItem[]> {
        return this.model.find();
    }
}

export const itemController = new ItemController();
