import { Component, OnInit } from '@angular/core';
import { IPersona } from 'src/app/interfaces/persona.interface';

@Component({
  selector: 'app-formulario-ngmodel',
  templateUrl: './formulario-ngmodel.component.html',
  styleUrls: ['./formulario-ngmodel.component.css']
})
export class FormularioNgmodelComponent implements OnInit {

  persona:IPersona = {} as IPersona;

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.persona);
  }

}
