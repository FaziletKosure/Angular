import { Todo } from './../models/todo';
import { TodoResponseModel } from 'src/app/models/todoResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl='https://jsonplaceholder.typicode.com/todos'

  constructor(private httpClient:HttpClient) { }

  // getProducts():Observable<TodoResponseModel>{
  //   return this.httpClient.get<TodoResponseModel>(this.apiUrl)
  //     }

  getProducts():Observable<Todo[]>{
    return this.httpClient.get<Todo[]>(this.apiUrl)
      }
}
