import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from '../../models/address';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {

  constructor(private http:HttpClient) { }

  // return the address
  getAdress(cep:string):Observable<Address>{
    return this.http.get<Address>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
