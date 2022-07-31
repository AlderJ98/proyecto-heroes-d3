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

  constructor() { }

  ngOnInit(): void {
  }

}
