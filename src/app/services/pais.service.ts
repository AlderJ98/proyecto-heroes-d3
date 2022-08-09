import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  // Metodos http
  // get -> cosnultas
  // post -> guardar
  // put -> editar
  // delete -> eliminar

  constructor(private _http:HttpClient) { }

  getPaises(){
    return this._http.get<any>('https://restcountries.com/v2/lang/es');
  }
}
