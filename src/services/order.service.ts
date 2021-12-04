import { Injectable } from '@angular/core';
import { Order, OrderDetails } from '../interfaces/order';
import { OrderProduct } from '../interfaces/orderProduct';

@Injectable({
    providedIn: 'root'
  })
export class OrderService{
    public orders : Order[];
    public orderProducts : OrderProduct[];

constructor(){
    this.orders = JSON.parse(localStorage.getItem('orders')?.toString() ?? '[]');   
    this.orderProducts = JSON.parse(localStorage.getItem('orderProducts')?.toString() ?? '[]');   
}

    getAll(): Order[] {        
        return this.orders;
    }
    
    get(id: number): any{
         var orderDetails : OrderDetails;

         orderDetails = { 
            order : this.orders.find(p => p.orderID == id) || { orderID : 0, orderDate : "", orderTotal : 0 },
            orderProducts : this.orderProducts.filter(o => o.orderID == id)
        };

        return orderDetails;
    }

    placeOrder(ordProducts: OrderProduct[]): void{
        var orderTotal : number = 0;

        ordProducts.forEach(element => {
            orderTotal += element.netProductPrice,
            this.orderProducts.push(element)
        });

        var order : Order = { orderID : 0, orderDate : new Date().toLocaleDateString(), orderTotal : orderTotal };

        // if(this.orders.length > 0)
        // {
        //     order.orderID = this.orders.length + 1;
        // }
        // else
        // {
        //     order.orderID = 1;
        // }

        order.orderID = this.orders.length + 1;


        this.orderProducts.forEach(element => {
            element.orderID = element.orderID == 0 ? order.orderID : element.orderID;
        });

        this.orders.push(order);

        localStorage.setItem('orders', JSON.stringify(this.orders));
        localStorage.setItem('orderProducts', JSON.stringify(this.orderProducts));
    }

    clearAll()
    {
        localStorage.clear();
    }
}