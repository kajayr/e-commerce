import { Component, OnInit } from '@angular/core';
import {products, Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  products:Product[] = products;
  h1Class:string = "test";
  today = new Date();
}
