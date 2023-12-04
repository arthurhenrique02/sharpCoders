import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent {
  // attribute to show text
  showText:boolean = true;

  changeTextVisibility():void {
    // change class attribute
    this.showText = !this.showText;
  }

  names:string[] = [
    "Arthur", "Rayssa",
    "Abc", "Def"
  ];

  p_language:string = "";

  // func to update de p_language
  updateProgrammingLanguage():void {
    alert("WORK!")
  }

}
