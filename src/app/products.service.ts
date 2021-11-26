import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  private products: Product[] = [
    { name: "Pants", quantity: 18, price: 50.7 },
    { name: "Shoes", quantity: 50, price: 90 },
    { name: "Hats", quantity: 10, price: 20.5 },
    { name: "Tshirts", quantity: 10, price: 25 },
    { name: "Dresses", quantity: 24, price: 70 },
    { name: "Socks", quantity: 5, price: 10 }
  ]

  getProducts() {
    return [...this.products]
  }
  
}
