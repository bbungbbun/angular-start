import { Product } from './products';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  constructor() { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    console.log(this.items)
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
