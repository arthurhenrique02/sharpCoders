import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddressesService } from '../../services/addresses.service';

@Component({
  selector: 'app-addresses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './addresses.component.html',
  styleUrl: './addresses.component.css'
})
export class AddressesComponent {

  //overriding the constructor
  constructor(private addressService:AddressesService){}

  cep:string = '';

  getAddress():void{
    this.addressService.getAdress(this.cep).subscribe((data)=>{
      console.log(data);
    });
  }
}
