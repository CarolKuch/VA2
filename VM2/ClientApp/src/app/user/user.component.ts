import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() {
    
  }
  
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log('Your form data : ', form.value);
  }

}
