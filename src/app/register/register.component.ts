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
      email: ['',[Validators.required, Validators.email, Validators.pattern('[a-z/A-Z/0-9/@.]*')]],
      pass: ['',[Validators.required, Validators.minLength(8)]],
      nombre: ['',[Validators.required]],
      apellido: ['',[Validators.required]],
      documento: ['',[Validators.required]],
      direccion: ['',[Validators.required]],
      telefono: ['',[Validators.required]],
      genero: ['',[Validators.required]],
    });
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

  get email (): AbstractControl | null { return this.form.get('email') }
  get pass (): AbstractControl | null { return this.form.get('pass') }
  get nombre (): AbstractControl | null { return this.form.get('nombre') }
  get apellido (): AbstractControl | null { return this.form.get('apellido') }
  get documento (): AbstractControl | null { return this.form.get('documento') }
  get direccion (): AbstractControl | null { return this.form.get('direccion') }
  get telefono (): AbstractControl | null { return this.form.get('telefono') }
  get genero (): AbstractControl | null { return this.form.get('genero') }

}
