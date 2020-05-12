import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // html tag som kan benyttes i en html fil
  templateUrl: './app.component.html', // kan benytte templates i Angular på 2 måder. 1) ´´ eller en fil
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular003';
}
