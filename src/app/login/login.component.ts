import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPersona } from '../interfaces/persona.interface';
import { IUsuario } from '../interfaces/usuario.interface';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form:FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder, private _serviceLogin: LoginService) { }

  ngOnInit(): void {
    this.buildForm();
  }

  login(){
    const usuario:IUsuario = this.form.value;
    this._serviceLogin.login(usuario);
  }

  buildForm(){
    this.form = this.formBuilder.group({
      email: ['',[Validators.required, Validators.email, Validators.pattern('[a-z/A-Z/0-9/@.]*')]],
      pass: ['',[Validators.required, Validators.minLength(8), this.validarContrasena]],
    });
  }

  validarContrasena(control: AbstractControl){
    const contrasena:string = control.value || '';
    let error = null;
    let primeraLetra = contrasena.charAt(0);
    let aceptados = /^[a-zA-Z]+$/;

    if(contrasena.charAt(contrasena.length - 1) != '.'){
      error = { punto: 'Debe terminar con un punto!' }
    }
    if(!primeraLetra.match(aceptados)){
      error = { ...error, primeraLetra: 'El primer carácter debe ser letra!' }
    }
    return error;
  }

  guardar(){
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
    //funcionalidad de guardar
    console.log(this.form);
    if(this.form.value.email == 'alder@gmail.com' && this.form.value.pass == 'alder1234.'){
      alert('Usuario validado correctamente');
    } else {
      alert('Correo y/o contraseña incorrecta');
    }
  }

  getError(controlName:string){
    let error = null;
    const control = this.form.get(controlName);
    if(control?.errors != null){
      error = control?.errors;
    }
    return error;
  }

  get email (): AbstractControl | null { return this.form.get('email') }
  get pass (): AbstractControl | null { return this.form.get('pass') }

}
