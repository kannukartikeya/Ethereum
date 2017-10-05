import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-sh-register',
  templateUrl: './sh-register.component.html',
  styleUrls: ['./sh-register.component.css']
})
export class ShRegisterComponent implements OnInit {

  myForm:FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl()
    });
   }

  ngOnInit() {
  }

}
