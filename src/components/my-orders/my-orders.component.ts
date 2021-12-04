import { Component, OnInit } from '@angular/core';
import { Order, OrderDetails } from 'src/interfaces/order';
import { OrderService } from 'src/services/order.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  public orders? : Order[];
  public displayedColumns = ['orderID', 'orderDate', 'orderTotal'];
  public displayeOrderDetailsColumns = ['productName', 'unitPrice', 'quantity', 'netProductPrice'];
  public orderDetails? : OrderDetails;
  showOrderDetails : boolean = false;

  constructor(private orderService : OrderService) { }

  ngOnInit(): void {
    this.fillOrders();
  }

  private fillOrders(): void{
    this.orders = this.orderService.getAll();
    
  }

  showOrderInfo(order: any) : void{
    this.orderDetails = this.orderService.get(order.orderID);
    console.log(this.orderDetails);

    this.showOrderDetails = true;
  }
}
