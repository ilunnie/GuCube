import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { UserService } from '../user.service';
import { ConfirmPassword } from '../MyValidators/isEqual';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  firstFormGroup = this._formBuilder.group({
    loginCtrl: ['', Validators.minLength(5)],
  });
  loginFormGroup = this._formBuilder.group({
    passwordCtrl: ['', Validators.required],
  });
  signupFormGroup = this._formBuilder.group({
    passwordCtrl: ['', Validators.minLength(5)],
    confirmCtrl: ['', Validators.required],
    nameCtrl: ['', [Validators.required, Validators.pattern('^[a-zA-Z\u00C0-\u017F\s]+$')]],
  }, { validators: ConfirmPassword });
  
  isNew = false;

  constructor(
    private router: Router,
    private user: UserService,
    private _formBuilder: FormBuilder) {}

  verifyLogin() {
    this.user.login({
      login: this.firstFormGroup.value.loginCtrl!,
      password: "",
      name: ""
    }, (result: any) => {
      if (result.status == 404) {
        this.isNew = true;
      } else {
        this.isNew = false;
      }
    })
  }

  login() {
    this.user.login({
      login: this.firstFormGroup.value.loginCtrl!,
      password: this.loginFormGroup.value.passwordCtrl!,
      name: ""
    }, (result: any) => {
      if (result.token) {
        sessionStorage.setItem('jwt', result.token);
        this.router.navigate([''])
      }
    })
  }

  signup() {
    if (this.firstFormGroup.errors != null || this.signupFormGroup.errors != null) 
      return;
    this.user.register({
      login: this.firstFormGroup.value.loginCtrl!,
      password: this.signupFormGroup.value.passwordCtrl!,
      name: this.signupFormGroup.value.nameCtrl!
    }, (result: any) => {
      this.user.login({
        login: this.firstFormGroup.value.loginCtrl!,
        password: this.signupFormGroup.value.passwordCtrl!,
        name: ""
      }, (result: any) => {
        console.log(result)
        if (result.token) {
          sessionStorage.setItem('jwt', result.token);
          this.router.navigate([''])
        }
      })
    })
  }  
}
