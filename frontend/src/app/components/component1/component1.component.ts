import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico1Service } from 'src/app/services/servico1.service';
import {Cadastro} from '../../models/cadastro.model';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  router: any;
  cadastro: Cadastro[];
  error:any;
senha:string;
  email:string;
  

  constructor(private servico1:Servico1Service, router: Router) {
    this.router;
   }

  ngOnInit(): void {
  }

  validaLogin(){
    this.servico1.getLogin().subscribe(
      (data: Cadastro[]) =>{
        this.cadastro = data
        console.log("O que retornou em dados: ", data);
        console.log("Variavel cadastro: ", this.cadastro);
        if(this.cadastro){
          for(let aux of this.cadastro){
            if((this.email == aux.email) && (this.senha == aux.senha)){
              console.log("Usuario validado");
            }
          }
        }

      },
      (error:any) =>  {
        this.error = error;
        console.log("Erro: "  + this.error);
      }
    )
  }

 
}
