import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TablaService {

  constructor(private _http:HttpClient) { }

  getDatos(){
    return this._http.get<any>('https://jsonplaceholder.typicode.com/todos');
  }
}
