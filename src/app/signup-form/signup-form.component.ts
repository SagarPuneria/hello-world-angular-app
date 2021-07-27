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

    username: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace
      ],
      UsernameValidators.shouldBeUnique),

    password: new FormControl('', Validators.required)
  });
  get userName() {
    return this.form.get('username');
  };
  login() {
    // Setting error when user click submit the form, we are goinng to get this error no matter what.
    this.form.setErrors({
      invalidLogin: true
    });
    // this.userName.setErrors

    /* // Comenting the below code, since we don't authentication service...
    let isValid = authService.login(this.form.value)
    if (!isValid){
      // this.userName.setErrors
      this.form.setErrors({
        invalidLogin: true
      })
    } */
  }
  constructor() { }

  ngOnInit() {
  }

}
