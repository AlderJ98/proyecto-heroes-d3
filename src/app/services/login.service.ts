import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IUsuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  usuario$: Subject<IUsuario>

  constructor() {
    this.usuario$ = new Subject();
  }

  getUsuario$(): Observable<IUsuario>{
    return this.usuario$.asObservable();
  }

  login(persona:IUsuario){
    this.usuario$.next(persona);
  }
}
