import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fourth-component',
  standalone: true,
  imports: [FormsModule, ],
  templateUrl: './fourth-component.component.html',
  styleUrl: './fourth-component.component.css'
})
export class FourthComponentComponent {
  text:string = "";

  // vars to store form data
  email:string = "";
  password:string = "";

}
