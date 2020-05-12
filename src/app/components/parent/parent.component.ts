import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  parentLoggedOn : boolean = true;
  constructor() { }

  ngOnInit(): void {
    console.log("test");

  }

}
