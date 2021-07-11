import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  log(x) {
    console.log(">>>log, ngModel x:", x);
  }

  submit(f) {
    console.log(">>>Debug 1 submit, ngForm f:", f);
    console.log(">>>Debug 2 submit, ngForm value:", f.value, f.form.value);
  }

  getContact(c) {
    console.log(">>>getContact, ngModelGroup c:", c);
  }

}
