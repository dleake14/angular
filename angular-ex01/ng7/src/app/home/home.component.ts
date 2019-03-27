import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1Style: boolean = false;

  //Create an instance via dependecy injection 
  constructor(private data: DataService) { }

  ngOnInit() {
  }

  firstClick() {
    this.data.firstClick();
  }

}
