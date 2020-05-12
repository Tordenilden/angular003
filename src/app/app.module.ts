import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { GedComponent } from './components/ged/ged.component';
import { SlangeComponent } from './components/slange/slange.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
//Routes
import { Routes,RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http'; // API get/set mandag 11-05

// oprette en variabel med sine "routes" , som er et array
// registrer dem i denne fil
// oprette en menu i en HTML fil
const appRoutes : Routes=[
{path: 'parent', component:ParentComponent}, // 'parent' skal matche med 'parent' i HTML
{path: 'person', component:PersonComponent},
{path: 'Kaffe', component:ParentComponent},

]


@NgModule({
  declarations: [ // her er alle vores Components defineret + noget mere som kommer senere
    AppComponent, PersonComponent, GedComponent, SlangeComponent, ParentComponent, ChildComponent, TodosComponent, TodoComponent
  ],
  imports: [ // Moduler  blandt andet vores communication med API
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // til API get/set mandag 11-05
  ],
  providers: [], // services er en fil som kan tilgåes af alle .ts filer
  bootstrap: [AppComponent] // start af vores web
})
export class AppModule { }









/* Kan route på 2 måder
 Direkte i denne fil
 I sit eget Modul
 Er der forskel?? Tja, smager kagen anderledes hvis den skæres anderledes?!

 */
