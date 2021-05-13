import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './components/component1/component1.component';
import { Component2Component } from './components/component2/component2.component';
import { Component3Component } from './components/component3/component3.component';

const routes: Routes = [
  {path: "", component: Component1Component},
  {path: "Cadastro", component: Component2Component},
  {path: "Home", component: Component3Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
