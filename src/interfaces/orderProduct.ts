import { Product } from "./product";

export interface OrderProduct{
    orderID: number,
    product: Product,
    quantity: number,
    netProductPrice: number
}

