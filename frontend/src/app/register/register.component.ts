import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.registerForm = this._formBuilder.group({
      name : new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });

  }
  

}
