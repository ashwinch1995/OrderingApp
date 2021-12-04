export interface Product{
    productID: number,
    productName: string,
    category: string,
    brand: string,
    unitPrice: number
}

export interface ProductModel{
    product: Product,
    quantity : number,
    addedToCart : boolean
}