import { Component, DoCheck, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit, OnDestroy, DoCheck {
  @Input() product: Product;
  constructor() {
    console.log('1. constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('2. ngOnChanges');
  // }
  ngOnInit(): void {
    console.log('3. ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('5. ngOnDestroy');
  }

  ngDoCheck(): void {
    console.log('4. ngDoCheck');
  }

  addToCart(): void {
    console.log('Add to cart');
  }
}
