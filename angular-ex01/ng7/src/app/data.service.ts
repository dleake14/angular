import { Injectable } from '@angular/core';

//These are called decorators
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  
  firstClick(){
    return console.log('clicked');
  }
}