import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../products';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product: Product | undefined;

  constructor(private route: ActivatedRoute) { } // 의존성 주입

  ngOnInit() {
    // First get the product id from the current route.
    // product id를 최근 route에서 얻어옴
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    // id에 해당하는 product를 찾음
    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
