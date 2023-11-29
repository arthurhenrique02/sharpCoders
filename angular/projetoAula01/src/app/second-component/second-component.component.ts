import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent {
  // attribute to show text
  showText:boolean = false;
}
