import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Abrir } from 'src/app/models/abrir.model';
import { Servico1Service } from 'src/app/services/servico1.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {
  erro: any;
  router: Router;
  abrir: Abrir[];
  nome: string;
  email: string;
  date: string;
  chamado: string;
  telefone: number;
  cadastradoNoBanco: boolean;

  constructor(private servico1: Servico1Service, router: Router) {
    this.router = router;
  }
  ngOnInit(): void {
  }

  abrirChamado() {
    console.log("Entrou");
    console.log(this.nome);
    console.log(this.email);
    console.log(this.date);
    console.log(this.chamado);
    console.log(this.telefone);
    if (this.nome == null || this.email == null || this.date == null || this.chamado == null || this.telefone == null) {
      this.cadastradoNoBanco = false
      alert("Digite algum chamado");
    }
    else {
      this.servico1.postChamado(this.nome, this.email, this.date, this.chamado, this.telefone).subscribe(
        (data: boolean) => {
          this.cadastradoNoBanco = data;
          console.log(" aqui>: ", this.cadastradoNoBanco)
          if (this.cadastradoNoBanco) {
            alert("Chamado com sucesso");
            this.router.navigate(["/Home/"]);
          }
        },
        (error: any) => {
          this.erro = error
          console.log("Erro >> " + this.erro)
        }
      )
    }
  }
}

