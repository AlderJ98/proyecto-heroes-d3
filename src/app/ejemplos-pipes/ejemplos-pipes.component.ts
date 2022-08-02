import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos-pipes',
  templateUrl: './ejemplos-pipes.component.html',
  styleUrls: ['./ejemplos-pipes.component.css']
})
export class EjemplosPipesComponent implements OnInit {

  nombre:string = 'Alder';
  pi:number = Math.PI;
  porcentaje:number = 0.25;
  salario:number = 1234.5;
  fecha:Date = new Date();

  valorPromesa = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve(`Llego la data`);
    }, 3000);
  });

  heroe = {
    nombre:'logan',
    edad: 1000,
  }

  darClick(){
    alert('hola')
  };

  cambiarType(){
    let elemento:any = document.querySelector('#password');
    if(elemento.type === "text"){
      elemento.type = "password";
    } else {
      elemento.type = "text";
    }
  }

  pass:string = '';
  cadena:string = '';
  arrayPassword:string[] = [];
  cambiar(){
    this.arrayPassword = this.pass.split('');
    this.arrayPassword.map(letra => this.cadena += `*`);
    return this.pass = this.cadena;
  }


  isShow:Boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
