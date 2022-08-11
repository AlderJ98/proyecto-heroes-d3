import { Component, OnInit } from '@angular/core';
import { TablaService } from '../services/tabla.service';

@Component({
  selector: 'app-tabla-api',
  templateUrl: './tabla-api.component.html',
  styleUrls: ['./tabla-api.component.css']
})
export class TablaApiComponent implements OnInit {

  datos:any[] = [];

  constructor(private _serviceDatos:TablaService) { }

  ngOnInit(): void {
    this.getPaises();
  }

  getPaises(){
    this._serviceDatos.getDatos().subscribe((data:any[]) => {
      this.datos = data;
    });
  }

}
