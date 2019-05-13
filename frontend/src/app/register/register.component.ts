import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {

    this.registerForm = this._formBuilder.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.compose([Validators.required])),
    });
  }

  tryRegister(value){
    this.authService.doRegister(value)
      .then(res => {
        console.log(res);
        this.router.navigate(['dashboard']);
      }, err => {
        console.log(err);
        alert('error');
      });
  }
}
