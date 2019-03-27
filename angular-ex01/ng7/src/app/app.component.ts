import { Component } from '@angular/core';

@Component({
  //Sets this as the applications root
  selector: 'app-root',
  //assigns the default html file in this folder
  templateUrl: './app.component.html',
  //asigns the default css file in this folder
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng7';
}
