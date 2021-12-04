import { OrderProduct } from "./orderProduct";

export interface Order{
    orderID: number,
    orderTotal: number,
    orderDate: string
}

export interface OrderDetails{
    order: Order,
    orderProducts: OrderProduct[]
}