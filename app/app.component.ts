import { Component } from '@angular/core';
import { CepService } from '../services/cep.service';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
  form;
  err;
  done;

  constructor(private service:CepService, private fb:FormBuilder){
    this.form = fb.group({
      cep : ['', Validators.required],
      logradouro : [''],
      cidade : [''],
      tipo_logradouro : [''],
      uf : [''],
      bairro : ['']
    });
  }

  buscarCep(){
  
    let cep = this.form.value.cep;

    let controls = this.form.controls;
    //this.form.controls['logradouro'].setValue("Jhonatan Teste!");
    this.service.buscarCep(cep).subscribe(sc => {
      console.log(sc.json());
      this.done = "Resultado para o cep : ".concat(cep).concat(" encontrado com sucesso!");
          for(var e in controls){
            this.form.controls[e].setValue(sc.json()[e]);
          }
    }, er => {
      this.err = "Falha ao recuperar CEP : "+er.text();
    }); 
  }
}
