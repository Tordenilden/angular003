import { Injectable } from '@angular/core';
import { Todo } from '../Model/Todo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TodoService {

  url : string = 'https://jsonplaceholder.typicode.com/todos';
  urlLimit : string; // limits the numbers we get back

  todos2 : Observable<Todo[]>;
  constructor(private http:HttpClient) { }//DI - creates an property named http assign with (http)

  // 2) hente data fra API - skal benytte Observable
  getTodos():Observable<Todo[]>{
    // if we have time declare the right type
    // this.todos2 = this.http.get<Todo[]>(`${this.url}`);
    // console.log(this.todos2);
  //ggg
    return this.http.get<Todo[]>(`${this.url}`); // når I benytter get, så skal den vide hvad den får tilbage
  }

  //putTodos
  //deleteTodos

  //postTodos / add

  // 1) hardcodet array
  // getTodos():Todo[]{
  //   return[
  //     {
  //       id:1,
  //       title:'todo one',
  //       completed: false,
  //       date: new Date("05-13-2020")
  //     },
  //     {
  //       id:2,
  //       title:'todo two',
  //       completed: true,
  //       date: new Date("05-13-2020")
  //     },
  //     {
  //       id:3,
  //       title:'todo three',
  //       completed: false,
  //       date: new Date("05-13-2020")
  //     },
  //     {
  //       id:3,
  //       title:'todo four',
  //       completed: false,
  //       date: new Date("05-13-2020")
  //     },
  //     {
  //       id:3,
  //       title:'todo five',
  //       completed: false,
  //       date: new Date("05-13-2020")
  //     }
  //   ]
  // }
}
