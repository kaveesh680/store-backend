import {IResolvers} from "graphql-tools";
import {ElectronicModel} from "../../database/model/ElectronicModel";
import {FoodModel} from "../../database/model/FoodModel";
import {FruitModel} from "../../database/model/FruitModel";
import {MeatModel} from "../../database/model/MeatModel";
import {PharmacyModel} from "../../database/model/PharmacyModel";
import {VegetableModel} from "../../database/model/VegetableModel";
import {v4 as uuidv4} from 'uuid'
import {IProduct} from '../types/types';
import {ELECTRONIC, FOOD, FRUIT, MEAT, PHARMACY, VEGETABLE} from "../constants/constants";
import {ForbiddenError} from "apollo-server-express";

export const ProductResolver: IResolvers = {
    Query: {
        getFoodProducts: async () => {
            const foods = await FoodModel.find();
            return {
                category: "Food", products: foods
            };
        },
        getElectronicProducts: async () => {
            const electronics = await ElectronicModel.find();
            return {
                category: "Electronic", products: electronics
            };
        },
        getFruitProducts: async () => {
            const fruits = await FruitModel.find();
            return {
                category: "Fruit", products: fruits
            };
        },
        getMeatProducts: async () => {
            const meats = await MeatModel.find();
            return {
                category: "Meat", product: meats
            };
        },
        getPharmacyproducts: async () => {
            const pharmacies = await PharmacyModel.find();
            return {
                category: "Pharmacy", product: pharmacies
            };
        },
        getVegetableProducts: async () => {
            const vegetables = await VegetableModel.find();
            return {
                category: "Vegetable", product: vegetables
            };
        }
    },
    Mutation: {
        addProduct: async (_, args: {
            name: string,
            image: string,
            current_price: number,
            old_price: number | null,
            key: string
            category: string
        }, context: { admin: true }) => {
            let product;
            const item: IProduct = {
                _id: uuidv4(),
                name: args.name,
                image: args.image,
                current_price: args.current_price,
                old_price: args.old_price,
                key: args.key
            }
            if (context.admin) {
                switch (args.category) {
                    case VEGETABLE: {
                        product = await VegetableModel.create(item);
                        break;
                    }
                    case MEAT: {
                        product = await MeatModel.create(item);
                        break;
                    }
                    case FRUIT: {
                        product = await FruitModel.create(item);
                        break;
                    }
                    case PHARMACY: {
                        product = await PharmacyModel.create(item);
                        break;
                    }
                    case ELECTRONIC: {
                        product = await ElectronicModel.create(item);
                        break;
                    }
                    case FOOD: {
                        product = await FoodModel.create(item);
                        break;
                    }
                    default: {
                        break;
                    }
                }
            } else {
                throw new ForbiddenError("No access, Only Admin")
            }
        },
        updateProduct: async (_, args: {
            _id: string,
            name: string,
            image: string,
            current_price: number,
            old_price: number | null,
            key: string
            category: string
        }, context: { admin: true }) => {
            let product;
            const item: IProduct = {
                _id: uuidv4(),
                name: args.name,
                image: args.image,
                current_price: args.current_price,
                old_price: args.old_price,
                key: args.key
            }
            if (context.admin) {
                switch (args.category) {
                    case VEGETABLE: {
                        product = await VegetableModel.findOneAndUpdate({_id: args._id}, item, {new: true});
                        break;
                    }
                    case MEAT: {
                        product = await VegetableModel.findOneAndUpdate({_id: args._id}, item, {new: true});
                        break;
                    }
                    case FRUIT: {
                        product = await VegetableModel.findOneAndUpdate({_id: args._id}, item, {new: true});
                        break;
                    }
                    case PHARMACY: {
                        product = await VegetableModel.findOneAndUpdate({_id: args._id}, item, {new: true});
                        break;
                    }
                    case ELECTRONIC: {
                        product = await VegetableModel.findOneAndUpdate({_id: args._id}, item, {new: true});
                        break;
                    }
                    case FOOD: {
                        product = await VegetableModel.findOneAndUpdate({_id: args._id}, item, {new: true});
                        break;
                    }
                    default: {
                        break;
                    }
                }
            } else {
                throw new ForbiddenError("No access, only admin");
            }
        },
        deleteProduct: async (_, args: { _id: string, category: string }, context: { admin: true }) => {
            let product;
            if (context.admin) {
                switch (args.category) {
                    case VEGETABLE: {
                        product = await VegetableModel.findOneAndDelete({_id: args._id});
                        break;
                    }
                    case MEAT: {
                        product = await VegetableModel.findOneAndUpdate({_id: args._id});
                        break;
                    }
                    case FRUIT: {
                        product = await VegetableModel.findOneAndUpdate({_id: args._id});
                        break;
                    }
                    case PHARMACY: {
                        product = await VegetableModel.findOneAndUpdate({_id: args._id});
                        break;
                    }
                    case ELECTRONIC: {
                        product = await VegetableModel.findOneAndUpdate({_id: args._id});
                        break;
                    }
                    case FOOD: {
                        product = await VegetableModel.findOneAndUpdate({_id: args._id});
                        break;
                    }
                    default: {
                        break;
                    }
                }
            } else {
                throw new ForbiddenError("No accees, Only admin");
            }
        }
    }
}