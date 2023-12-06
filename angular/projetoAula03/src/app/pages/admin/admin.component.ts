import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  // override constructor
  constructor(private router: Router) {}

  exit():void {
    // remove email from local storage
    localStorage.removeItem("email")
    // redirect to login
    this.router.navigateByUrl('/login');
  }
}
