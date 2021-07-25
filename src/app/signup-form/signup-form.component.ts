import { UsernameValidators } from './username.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  form = new FormGroup({
    // If key has special character name like - then that key is not valid property in JS. 
    // So then we need to put this key in single quotes.
    // 'user-name':new FormControl()

    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ]),
    password: new FormControl('', Validators.required)
  });
  get userName() {
    return this.form.get('username');
  };

  constructor() { }

  ngOnInit() {
  }

}
