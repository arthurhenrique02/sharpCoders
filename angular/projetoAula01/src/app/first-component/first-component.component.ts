import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  // create attributes
  text:string = "Hello Rayssa";

  // create person`s object
  person:Object = {
    "name": "Rayssa",
    "age": 21
  };

}
