import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Servico1Service {

  constructor(private http:HttpClient) { }

  /* Pega a lista de usuários do DB para poder comparar se existe */
  public getLogin():Observable<any>{
    return(this.http.get('http://localhost:8080/cliente'));
  }

  /* cadastra usuário no DB */
  public postUsuario(usuario:string,email:string, senha:string){
    return(this.http.get('http://localhost:8080/cliente/cadastrar/' + usuario + '/' + email + '/' + senha));
  }
}
