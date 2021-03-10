import { Todo } from './../../models/todo';
import { Product } from './../../models/product';
import {HttpClient} from '@angular/common/http'
import { Component, OnInit } from '@angular/core';
import { ProductResponseModel } from 'src/app/models/productResponsModel';
import { TodoResponseModel } from 'src/app/models/todoResponseModel';
import { ProductService } from 'src/app/services/product.service';

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
  dataLoaded=false
  apiUrl="https://jsonplaceholder.typicode.com/todos"
  // productResponseModel:ProductResponseModel={}
  // todoResponseModel:TodoResponseModel={
  //   data:this.todos,
  //   message:"",
  //   success:true
  // }
  todos:Todo[]=[];
  
  constructor(private productServive:ProductService) { }

  ngOnInit(): void {
    console.log('werked Init');
    this.getProducts();
    
  }

//   getProducts(){
// this.httpClient.get<TodoResponseModel>(this.apiUrl).subscribe((response)=>{
//   this.todos=response.data
//   console.log(response);
  
// })
//   }
getProducts(){
  console.log("started api request");
  
  this.productServive.getProducts().subscribe(response=>{
    this.todos=response
    this.dataLoaded=true
    console.log('fnished api request');
    
    console.log(response);
    
  })
  console.log('fnished method');
  

}

}