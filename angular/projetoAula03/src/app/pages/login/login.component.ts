import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    // override constructor
    constructor(private router: Router) {}

    // create form instance form
    form = new FormGroup({
      // get email and password
      // add required to this fields
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });

    authenticate():void {
      // get email and password from form
      const { email, password } = this.form.value;
      // check if email and password are correct
      if (email === 'arthur@email.com' && password === '123'){
        // add email to local storage
        localStorage.setItem("email", email)
        // redirect to admin
        this.router.navigateByUrl('/admin');
      }else {
        alert('Email ou senha incorretos')
      }

    }
}
