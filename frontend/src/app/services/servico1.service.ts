import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Servico1Service {

  constructor(private http: HttpClient) { }

  /* Pega a lista de usuários do DB para poder comparar se existe */
  public getLogin(): Observable<any> {
    return (this.http.get('http://localhost:8080/cliente'));
  }

  /* cadastra usuário no DB */
  public postUsuario(usuario: string, email: string, senha: string) {
    return (this.http.get('http://localhost:8080/cliente/cadastrar/' + usuario + '/' + email + '/' + senha));
  }
  public postChamado(nome: string, email: string, data: string, chamado: string, telefone: number) {
    return (this.http.get('http://localhost:8080/abrir/chamar/' + nome + '/' + email + '/' + data + '/' + chamado + '/' + telefone));

  }

  public getUsuario(): Observable<any> {
    return (this.http.get('http://localhost:8080/abrir/'));
  }


}
