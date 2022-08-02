import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-ngmodel',
  templateUrl: './formulario-ngmodel.component.html',
  styleUrls: ['./formulario-ngmodel.component.css']
})
export class FormularioNgmodelComponent implements OnInit {


  nombre:string = '';
  apellido:string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
