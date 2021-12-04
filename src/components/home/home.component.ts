import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OrderProduct } from 'src/interfaces/orderProduct';
import { Product, ProductModel } from 'src/interfaces/product';
import { ProductService } from 'src/services/product.service';
import { OrderService } from 'src/services/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public productsModel : ProductModel[] = [];
  public products? : Product[];
  public displayedColumns = ['productID', 'productName', 'brand', 'category', 'unitPrice', 'quantity', 'add'];
  public displayeOrderProductColumns = ['productName', 'quantity', 'netProductPrice']
  public product? : Product;  
  
  constructor(private productService : ProductService, private orderService : OrderService
    , private changeDetection : ChangeDetectorRef) { }

  ngOnInit(): void {  
    this.fillProducts();
    //console.log(this.products);
    //this.orderService.clearAll();
  }

  private fillProducts(): void{
    this.products = this.productService.getAll();
    this.products.forEach(element => {
      this.productsModel.push({product: element, quantity : 0, addedToCart : false});
    });
  }

  showAddProduct: boolean = false;
  showCartProduct : boolean = false;
  orderProducts : OrderProduct[] = [];

  showAddProductView(): void 
  { 
    this.showAddProduct = true;
  }

  onSubmit(product: Product){
    this.productService.push(product);
    window.location.reload();
  }

  rowClicked(productModel : ProductModel){
    console.log(productModel);
    if(productModel.quantity > 0)
    {
      this.showCartProduct = false;
      var orderProduct : OrderProduct = {product : productModel.product, orderID : 0, quantity : productModel.quantity, netProductPrice : (productModel.quantity * productModel.product.unitPrice)}    

      if(this.orderProducts.find(o => o.product.productID == productModel.product.productID) == null)
      {
        this.orderProducts?.push(orderProduct); 
      }
      else
      {
        var indexOfOldProduct = this.orderProducts.findIndex(o => o.product.productID == productModel.product.productID);
        this.orderProducts.splice(indexOfOldProduct, 1, orderProduct);      
      }

      console.log(this.orderProducts);
      this.changeDetection.detectChanges();

      this.showCartProduct = true;
    }
  }

  placeOrder(){
    if(this.orderProducts.length > 0)
    {
      this.orderService.placeOrder(this.orderProducts);      
      alert('Order Placed.');
      window.location.reload();
    }
  }

  closeAddProduct(){
    this.showAddProduct = false;
  }

}
