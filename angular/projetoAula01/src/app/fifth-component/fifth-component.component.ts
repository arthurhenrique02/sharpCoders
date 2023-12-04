import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-fifth-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './fifth-component.component.html',
  styleUrl: './fifth-component.component.css'
})
export class FifthComponentComponent {
  // create new form
  forms = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  submit_form():void {
    
  }
}
