import {IResolvers} from "graphql-tools";
import {OrderModel} from "../../database/model/OrderModel";
import {ForbiddenError} from "apollo-server-express";
import {v4 as uuidv4} from 'uuid';
import {CreateOrderType} from "../types/types";

export const OrderResolver: IResolvers = {
    Query: {
        allPendingOrders: async (_, args: {}, context: { admin: boolean }) => {
            if (context.admin) {
                const pendingOrders = await OrderModel.find({status: false});
                return pendingOrders;
            } else {
                throw new ForbiddenError("No accesss, Only Admins allowed to fetch these data");
            }
        },
        allCompletedOrders: async (_, args: {}, context: { admin: boolean }) => {
            if (context.admin) {
                const completedOrders = await OrderModel.find({status: true});
                return completedOrders;
            } else {
                throw new ForbiddenError("No accesss, Only Admins allowed to fetch these data");
            }
        },
        userPendingOrders: async (_, args: {}, context: { user_id: string }) => {
            if (context.user_id) {
                const pendingOrders = await OrderModel.find({user_id: context.user_id, status: false,});
                return pendingOrders;
            } else {
                throw new ForbiddenError("No Access");
            }
        },
        userCompletedOrders: async (_, args: {}, context: { user_id: string }) => {
            if (context.user_id) {
                const completedOrdes = await OrderModel.find({user_id: context.user_id, status: true})
            }
        }
    },
    Mutation: {
        setOrderDelivered: async (_, args: { order_id: string }, context: { admin: boolean }) => {
            if (context.admin) {
                let order = null;
                order = await OrderModel.findOneAndUpdate(
                    {
                        _id: args.order_id
                    },
                    {
                        status: true
                    },
                    {
                        new: true
                    });
                return order;
            } else {
                throw new ForbiddenError("No access, only Admin");
            }
        },
        deleteCompletedOrder: async (_, args: { order_id: string }, context: { user_id: string }) => {
            if (context.user_id) {
                let order = null;
                order = await OrderModel.findOneAndDelete({_id: args.order_id});
                return order;
            } else {
                throw new ForbiddenError("No access");
            }
        },
        createOrder: async (_, args: { order: CreateOrderType }, context: { user_id: string }) => {
            if (context.user_id) {
                let order = null;
                order = await OrderModel.create(
                    {
                        _id: uuidv4(),
                        user_id: context.user_id,
                        order_items: args.order.order_items,
                        date: new Date().toString(),
                        discount: args.order.discount,
                        sub_total: args.order.sub_total,
                        payment_method: args.order.payment_method,
                        status: false,
                        instruction: args.order.instruction,
                        delivery: args.order.delivery,
                        shipping: args.order.shipping
                    }
                );
                return order;
            } else {
                throw new ForbiddenError("No access");
            }
        }
    }
}
