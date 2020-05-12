import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Model/Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  // oprette er array af TOdos - svare til en Movie / eller lignende
  todos : Todo[];
  text : string = "tester ballade";
  constructor(private service:TodoService) { }//DI

  ngOnInit(): void {
    //1) uden service
    //  this.todos=[
    //   {
    //     id:1,
    //     title:'todo one',
    //     completed: false,
    //     date: new Date("05-13-2020")
    //   },
    //   {
    //     id:2,
    //     title:'todo two',
    //     completed: true,
    //     date: new Date("05-13-2020")
    //   },
    //   {
    //     id:3,
    //     title:'todo three',
    //     completed: false,
    //     date: new Date("05-13-2020")
    //   }
    // ]
    //2) med service
    // get our services - DI in ctor and import
    //this.todos= this.service.getTodos();

    //3) med service fra API
    //this.service.getTodos().subscribe() // så får vi ikke svar tilbage - Delete
    // ? er hvad betyder alt det her??!!
    this.service.getTodos().subscribe((kaffe) =>{
      this.todos=kaffe;
      //console.log(kaffe);

    });
    //this.service.getTodos().subscribe(function(kaffe){})
  }

}
