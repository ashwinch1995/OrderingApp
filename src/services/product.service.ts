import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../interfaces/product';

@Injectable({
    providedIn: 'root'
  })
export class ProductService{

    public products : Product[];

    constructor(){
        this.products = JSON.parse(localStorage.getItem('products')?.toString() ?? '[]'); 
        //this.products.push({ productID : 1, productName : "TV", brand : "LG", category : "Electronics", unitPrice : 500});        
    }

    getAll(): Product[] {
        return this.products;
    }
    
    get(id: number): any{
        return this.products.find(p => p.productID == id);
    }

    push(product: Product): void{

        // if(this.products.length > 0)
        // {
        //     product.productID = this.products.length + 1;
        // }
        // else
        // {
        //     product.productID = 1;
        // }

        product.productID = this.products.length + 1;

        this.products.push(product);

        localStorage.setItem('products', JSON.stringify(this.products));
    }
}