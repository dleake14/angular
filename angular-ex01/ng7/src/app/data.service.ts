import { Injectable } from '@angular/core';
//This is 'HttpClient' instead of 'HttpClientModule' - Not sure why
import { HttpClient } from '@angular/common/http';

//These are called decorators
@Injectable({
  providedIn: 'root'
})


export class DataService {


  constructor(private http: HttpClient) { }
  
  getUsers(){
    //reqres is a pretty cool web resource
    return this.http.get('https://reqres.in/api/users'); 
  }
}