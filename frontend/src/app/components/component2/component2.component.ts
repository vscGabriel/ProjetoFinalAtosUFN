import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servico1Service } from 'src/app/services/servico1.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  router: Router;
  cadastradoNoBanco: boolean;
  erro: any;

  id: number;
  email: string;
  usuario: string;
  senha: string;

  constructor(private servico1: Servico1Service, router: Router) { 
    this.router = router
  }

  ngOnInit(): void {
  }
  
  adicionaUsuario(){
    if(this.usuario == null || this.email == null || this.senha==null){
      this.cadastradoNoBanco = false
    }
    else{
      this.servico1.postUsuario(this.usuario,this.email,this.senha).subscribe(
        (data: boolean) =>{
          this.cadastradoNoBanco = data 
          if(this.cadastradoNoBanco){
            alert("Cadastrado com sucesso");
            this.router.navigate([""]);
          }         
        },
        (error: any) =>{
          this.erro = error
          console.log("Erro >> " + this.erro)
        }
      )
    }    
  }



}
