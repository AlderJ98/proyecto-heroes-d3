import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemplosPipesComponent } from './ejemplos-pipes/ejemplos-pipes.component';
import { FormularioNgmodelComponent } from './formularios/formulario-ngmodel/formulario-ngmodel.component';
import { FormularioReactivoComponent } from './formularios/formulario-reactivo/formulario-reactivo.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path:'pipes', component: EjemplosPipesComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'form/ngmodel', component: FormularioNgmodelComponent
  },
  {
    path:'form/reactivo', component: FormularioReactivoComponent
  },
  {
    path:'**', pathMatch:'full', redirectTo: 'pipes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
