import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { EjemplosPipesComponent } from './ejemplos-pipes/ejemplos-pipes.component';
import { RouterModule } from '@angular/router';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { LimitStringPipe } from './pipes/limit-string.pipe';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
import { FormularioNgmodelComponent } from './formularios/formulario-ngmodel/formulario-ngmodel.component';
import { FormularioReactivoComponent } from './formularios/formulario-reactivo/formulario-reactivo.component';

// decorador empieza con @ es una funcion comun y corriente
@NgModule({
  // Declarar nuestros pipes y directivas
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    NavbarComponent,
    EjemplosPipesComponent,
    MayusculasPipe,
    LimitStringPipe,
    CapitalizarPipe,
    ContrasenaPipe,
    FormularioNgmodelComponent,
    FormularioReactivoComponent
  ],
  // importar las librerias
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
