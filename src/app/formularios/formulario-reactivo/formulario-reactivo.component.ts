import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent implements OnInit {

  form:FormGroup = new FormGroup({});
  paises:any[] = [];

  constructor(
    private formBuilder:FormBuilder,
    private _servicePais:PaisService
    ) { }

  ngOnInit(): void {
    this.buildForm();
    this.getPaises();
  }

  getPaises(){
    this._servicePais.getPaises().subscribe((data:any[]) => {
      this.paises = data;
    });

  }

  buildForm(){
    this.form = this.formBuilder.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      pass: ['',[Validators.required, this.validarContrasena]],
      pais: [''],
      direccion: this.formBuilder.group({
        calle: ['', Validators.required],
        avenida: ['', Validators.required],
      })
    });
  }

  validarContrasena(control: AbstractControl){
    const contrasena:string = control.value || '';
    let error = null;
    if(!contrasena.includes('$')){
      error = { pesos: 'Es requerido el signo pesos.' }
    }
    if(!parseFloat(contrasena[0])){
      error = { ...error, number: 'Debe empezar por un número!' }
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
  }

  get usuarioRequerido(){
    if(this.nombre?.errors && this.nombre.touched){
      return this.nombre?.errors['required'];
    } else {
      return false;
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

  resetForm(){
    this.form.reset({});
  }

  get nombre (): AbstractControl | null { return this.form.get('nombre') }
  get apellido (): AbstractControl | null { return this.form.get('apellido') }


}
