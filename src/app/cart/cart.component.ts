import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder  } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  username:string = "";
  constructor(private cartService:CartService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: "",
    address: ""
  })
  onSubmit():void{
    this.username = this.checkoutForm.get(['name'])?.value;
    this.items = this.cartService.clearItems();
    console.log("Your order has been submitted ", this.checkoutForm.value);
    console.log("Name: " + this.username)
    this.checkoutForm.reset();
  }
}
