import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.form = this.formBuilder.group({
      tipoDocumento: ['',[Validators.required]],
      documento: ['',[Validators.required, Validators.minLength(6), this.validarDocumento]],
      nombre: ['',[Validators.required, Validators.minLength(3), Validators.pattern('[a-z/A-Z/ ]*')]],
      apellido: ['',[Validators.required, Validators.minLength(3), Validators.pattern('[a-z/A-Z/ ]*')]],
      direccion: ['',[Validators.required]],
      telefono: ['',[Validators.required, Validators.minLength(11), Validators.maxLength(11), this.validarTelefono]],
      genero: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email, Validators.pattern('[a-z/A-Z/0-9/@.]*')]],
      pass: ['',[Validators.required, Validators.minLength(8), this.validarContrasena]],
    });
  }

  validarDocumento(control: AbstractControl){
    const documento:number = control.value || '';
    let error = null;

    if(String(documento).includes('.') || isNaN(documento)){
      error = { numerico: 'El documento solo debe contener números' }
    }

    return error;
  }

  validarTelefono(control: AbstractControl){
    const telefono:number = control.value || '';
    let error = null;

    if(!String(telefono).substring(0,4).includes('-')){
      error = { guion: 'El telefono debe contener el indicativo seguido de un (-)' }
    }

    return error;
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
    if(this.form.valid){
      alert('Usuario registrado correctamente');
      this.resetForm();
    } else {
      alert('Opss... Algo salio mal! Revisa el formulario de registro.');
    }

  }

  resetForm(){
    this.form.reset({});
  }

  get tipoDocumento (): AbstractControl | null { return this.form.get('tipoDocumento') }
  get documento (): AbstractControl | null { return this.form.get('documento') }
  get nombre (): AbstractControl | null { return this.form.get('nombre') }
  get apellido (): AbstractControl | null { return this.form.get('apellido') }
  get direccion (): AbstractControl | null { return this.form.get('direccion') }
  get telefono (): AbstractControl | null { return this.form.get('telefono') }
  get genero (): AbstractControl | null { return this.form.get('genero') }
  get email (): AbstractControl | null { return this.form.get('email') }
  get pass (): AbstractControl | null { return this.form.get('pass') }

}
