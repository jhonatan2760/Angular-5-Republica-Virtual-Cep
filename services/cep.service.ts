import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http:Http) { }

  buscarCep(cep:string){
    return this.http.get("http://cep.republicavirtual.com.br/web_cep.php?cep="+cep+"&formato=json", {});
  }

}
