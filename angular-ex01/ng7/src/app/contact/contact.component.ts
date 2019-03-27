import { Component, OnInit } from '@angular/core';
//Importing 3 objects from the same directory
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  //Using Dependcy injection
  constructor(private formBuilder: FormBuilder) { 
    this.messageForm = this.formBuilder.group({ 
      //Initializing form objects and requiring validation
      name: ['', Validators.required],
      message: ['', Validators.required]
     })
  }

onSubmit() {
  this.submitted = true;

  //Test for valid form fill
  if (this.messageForm.invalid) {
    return;
  }

  this.success = true;
}

  ngOnInit() {
  }

}
