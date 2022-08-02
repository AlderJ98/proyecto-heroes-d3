import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  transform(nombre:string): unknown {
    let arrayNombre = nombre.split(' '),
        capitalize = '';

    arrayNombre.map(nombre => capitalize += `${nombre.charAt(0).toUpperCase() + nombre.slice(1).toLowerCase()} `);

    return capitalize;
  }

}
