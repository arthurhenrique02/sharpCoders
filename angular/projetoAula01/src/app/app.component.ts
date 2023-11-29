import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from "./first-component/first-component.component";
import { SecondComponentComponent } from "./second-component/second-component.component";
import { ThirdComponentComponent } from "./third-component/third-component.component";
import { FourthComponentComponent } from "./fourth-component/fourth-component.component";
import { FifthComponentComponent } from "./fifth-component/fifth-component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FirstComponentComponent, 
    SecondComponentComponent, ThirdComponentComponent, 
    FourthComponentComponent, FifthComponentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projetoAula01';
}
