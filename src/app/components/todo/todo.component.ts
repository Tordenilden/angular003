import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/Model/Todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()todo : Todo; // passet det enkelte objekt ind her fra vores parent
  @Input()ballade : string;

  // hvis vi vil have checkbox checked ved overstregning som standard, så skal vi have en variabel vi kan
  // måle på ligesom parent -*ngIf i HTML filen
  todoChecked : boolean = true;
  constructor() { }

  ngOnInit(): void {
    // kan vi sætte todoChecked herinde ved at benytte this.todo.completed eller noget lignende??
  }
  myMethod(){
    // console.log("hej med dig");
    // alert('hello ');
    // activate our styles here   - change completed to true/false   -
    // Hvordan finder vi ud af hvilken checkbox vi klikker på
    // hvordan ændrer vi tilstanden for this.todo.completed
    this.todo.completed=!this.todo.completed;


  }
  delete(){
    alert('deleted');
  }

//set dynamic classes <div [ngClass]="setClasses()">
setClasses(){
  let classes = {
    todo: true, // styelsheet
    'is-complete': this.todo.completed

  }
  return classes;
}


}
