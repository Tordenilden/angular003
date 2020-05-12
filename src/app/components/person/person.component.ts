import { Component, OnInit } from '@angular/core';
import {Person} from '../../Model/Person';
// '../'  -- dette betyder at vi går en folder ud / opad i hirakiet
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html', // alt mit HTML
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

// Data
name : string = "Ole"; // I fucked up
mail : string = "HansiNisseManden@fed.dk";
talArray : number[]=[2,4,6]; //et tomt array der er initialiseret
stringArray : string[]=["Bo","Ib","Anna","Ulla"];

personList : Person[];
personObj : Person;
// Handlinger
  constructor() { } // benyttes til DI kan vi ikke huske noget om

  ngOnInit(): void { // dette er vores startmetode / svare til at dreje nøglen i bilen

    //simpelt objekt!!
    this.personObj = new Person();
    // den fejler her!! hvad mangler vi? vi mangler linjen ovenover
    this.personObj.id=1;
    this.personObj.name="ida";
    this.personObj.address="Hansensvej 334";
    this.personObj.blacklistet=true;

    //this.personList = []; // en tom liste, en form for standard ting
    this.personList = [
      {
        id:1,
        name:"Ulla",
        address:"Hansenvej 33",
        blacklistet:true,
        date : new Date("05-14-2020")
      },
      {
        id:2,
        name:"Mette",
        address:"Lærkevej 33",
        blacklistet:false,
        date : new Date("05-20-2020")
      },
      {
        id:3,
        name:"Erik",
        address:"SangfuglVej 10",
        blacklistet:false,
        date : new Date("05-14-2020")
      },
      {
        id:4,
        name:"Isadora",
        address:"Solsortevej 221",
        blacklistet:true,
        date : new Date("05-24-2020")
      }
    ]







  //   console.log("hej med dig");
  //   console.log(name); // hvorfor får jeg en fejl??
  //   console.log(this.name);
  // // examples arrays

  //   console.log(this.talArray); // is it possible?
  //   console.log("vores første tal"+ this.talArray[0]);
  //   this.talArray.forEach(function(value){
  //     console.log("from foreach"+value);
  //   })
  // // string array
  //   this.stringArray.push("ida");
  //   this.stringArray.forEach(function(value){
  //     console.log("stringArray "+ value);
  //   })



    this.ourFirstMethod()
    this.ourSecondMethod() //invoke
    this.testingArguments("my argument!!")
  }
  // methods in our classes
  ourFirstMethod():void{
    console.log("from our first method");
  }
  ourSecondMethod(){
    console.log("from our second method");
  }
  //stavningen har meget at sige -- ASCII koder
  addPerson(){
    //denne linje er mandatory i alle methods i starten
    console.log("testing method");

    let p : Person = new Person();
    p.id=1;
    p.name="Knud er en tud";
    p.address="Hansensvej 334";
    p.blacklistet=true;
    this.personList.push(p); // vi kan splice det kan vi teste imorgen!!
  }
  testingArguments(name:string){
    //log
    console.log("our arguments " + name);
  }

// class how works? properties and methods...
// properties hvor kan de blive vist?? HTML og console.log()
// hvordan får vi vist vores nye Component??
//String array af data hvordan gør man det?
//Number array af data hvordan gør man det?
  /* Data how to get those
     interpolation, property binding [propertyName], Input, Output, +1
   */
}
