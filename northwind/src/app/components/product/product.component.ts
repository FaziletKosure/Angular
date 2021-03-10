import { Todo } from './../../models/todo';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  // product1= {productId:1,productName:"Bardak",categoryId:1,unitPrice:5,unitsInStock}
  // product2= {productId:2,productName:"Kalem",categoryId:1,unitPrice:5}
  // product3= {productId:3,productName:"Monitor",categoryId:1,unitPrice:5}
  // product4= {productId:4,productName:"Kitap",categoryId:1,unitPrice:5}
  // product5= {productId:5,productName:"Sandalye",categoryId:1,unitPrice:5}

  products:Product[] = [];
  todos:Todo[]=[];
  
  constructor() { }

  ngOnInit(): void {
  }

}