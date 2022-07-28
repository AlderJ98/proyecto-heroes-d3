import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemplosPipesComponent } from './ejemplos-pipes/ejemplos-pipes.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'pipes', component: EjemplosPipesComponent
  },
  {
    path:'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
