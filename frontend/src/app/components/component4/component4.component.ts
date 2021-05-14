import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Abrir } from 'src/app/models/abrir.model';
import { Servico1Service } from 'src/app/services/servico1.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {
  chamado: Abrir[];
  error: any;
  router: Router;
  constructor(private servico1: Servico1Service, router: Router) {
    this.router = router
  }
  ngOnInit(): void {
  }

  getter() {
    this.servico1.getUsuario().subscribe(
      (data: Abrir[]) => {
        this.chamado = data;
        console.log(this.chamado);
      }, 
      (error: any) => {
        this.error = error;
        console.log("Erro: " + this.error);
      }
    )
    }
}
