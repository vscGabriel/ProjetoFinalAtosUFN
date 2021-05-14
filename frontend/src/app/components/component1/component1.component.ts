import { LIVE_ANNOUNCER_DEFAULT_OPTIONS } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { empty } from 'rxjs';
import { Servico1Service } from 'src/app/services/servico1.service';
import { Cadastro } from '../../models/cadastro.model';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  router: any;
  cadastro: Cadastro[];
  error: any;
  senha: string;
  email: string;
  leitura: boolean = false;
  usuario: string;


  constructor(private servico1: Servico1Service, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }
  validaLogin() {
    this.servico1.getLogin().subscribe(
      (data: Cadastro[]) => {
        this.cadastro = data;
        console.log("Dados: ", this.cadastro)
        if (this.cadastro) {
          for (const aux of this.cadastro) {
            console.log(aux.usuario);
            console.log(aux.senha);
            if ((this.usuario == aux.usuario) && (this.senha == aux.senha)) {
              this.leitura = true;
              /* this.router.navigate(['/Home']); */
            }
          }
          if (this.leitura == true) {
            this.router.navigate(['/Home']);
          } else {
            alert("usuário não cadastrado");
            this.router.navigate(['/Cadastro']);
          }
        }
      },
      (error: any) => {
        this.error = error;
        console.log("Erro: " + this.error);
      }
    )
  }
}
