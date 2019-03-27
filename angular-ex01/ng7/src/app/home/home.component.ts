import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

//Creating users object to store data
  users: Object;

  //Create an instance via dependecy injection 
  constructor(private data: DataService) { }

  //This is an angular lifecycle point - what happens when page loads
  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    })

  }

}
