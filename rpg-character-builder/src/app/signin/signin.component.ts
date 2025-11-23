import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `

  <div class="signin-container">
  <form [formGroup]="signinForm" (ngSubmit)="signin();" class="signinform">
  <h1>Sign In</h1>
  <p>Already have an account? Sign in below.</p>
<fieldset>
<legend>User Sign In</legend>
<label for="email">Email</label>
<input formControlName="email" type="email" id="email" name="email">
@if (signinForm.controls['email'].touched &&
signinForm.controls['email'].hasError('required')) {
<small class="error">Email is required.</small>
}
@if (signinForm.controls['email'].touched &&
signinForm.controls['email'].hasError('email')) {
<small class="error">Invalid email address.</small>
}
<label for="password">Password</label>
<input formControlName="password" id="password" type="password">
@if (signinForm.controls['password'].touched &&
signinForm.controls['password'].hasError('required')) {
<small class="error">Password is required.</small>
}
@if (signinForm.controls['password'].touched &&
signinForm.controls['password'].hasError('pattern')) {
<small class="error">Password must be at least 8 characters long and contain at
least one uppercase letter and one number.</small>
}
<input type="submit" [disabled]="!signinForm.valid" value="Sign In">
</fieldset>
</form>
</div>

  `,
  styles: [`
    .signin-form-container {
      display: flex;
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
    }
    .signin-form {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .signin-form h1 {
      text-align: center;
      margin-bottom: 20px;
    }
    label, input {
      display: block;
      margin-bottom: 5px;
    }
    input,input[type="submit"] {
      padding: 8px;
      margin-bottom: 15px;
    }
      input[type="email"], input[type="password"] { width: 100%; box-sizing: border-box; }
    .error {
      color: red;
      padding: 5px;
    }
  `]
})

export class SigninComponent { signinForm:
  FormGroup=this.fb.group({
    email: [null, Validators.compose([Validators.required,Validators.email])],
    password: [null, Validators.compose([Validators.required,
    Validators.pattern('^(?=.*[A-Z])(?=.*[0-9]).{8,}$')])]
  });

  constructor(private fb: FormBuilder,
  private router: Router,private route: ActivatedRoute,
  private authService: AuthService) {

  }

  signin() {
    const email = this.signinForm.controls['email'].value;
    const password = this.signinForm.controls['password'].value;

    if (this.authService.signin(email, password)) {
      const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      this.router.navigate([returnUrl]);
  } else {
    alert('Invalid email or password. Please try again.');
  }
}
}
