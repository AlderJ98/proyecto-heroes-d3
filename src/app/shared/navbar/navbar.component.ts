import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nombreUsuario:string = "";

  constructor(private _serviceLogin:LoginService) { }

  ngOnInit(): void {
    this._serviceLogin.getUsuario$().subscribe(usuario => {
      this.nombreUsuario = `${usuario.email}`;
    })
  }

  ngOnDestroy(): void {
    this._serviceLogin.usuario$.unsubscribe();
  }

  logout(){
    this._serviceLogin.usuario$.unsubscribe();
    this._serviceLogin.usuario$ = new Subject();
    this.nombreUsuario = '';
  }

}
