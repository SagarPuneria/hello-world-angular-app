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
    console.log(">>>log, x:", x);
  }

  submit(f) {
    console.log(">>>submit, f:", f);
    console.log(">>>submit, form value:", f.value, f.form.value);
  }

}
