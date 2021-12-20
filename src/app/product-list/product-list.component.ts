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
  share(product:any){
    alert("Sharing my favorite product:" + "\n" + product.name + "\n" + product.description)
  }
  onNotify(){
    alert("We will notify you whenever this item is on sale")
  }
}
