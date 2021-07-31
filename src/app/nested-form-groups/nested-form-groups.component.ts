import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nested-form-groups',
  templateUrl: './nested-form-groups.component.html',
  styleUrls: ['./nested-form-groups.component.css']
})
export class NestedFormGroupsComponent implements OnInit {
  form = new FormGroup({
    account: new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  });

  get userName() {
    return this.form.get('account.username');
  }

  constructor() { }

  ngOnInit() {
  }

}
