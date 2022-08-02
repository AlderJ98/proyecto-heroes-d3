import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitString'
})
export class LimitStringPipe implements PipeTransform {

  transform(nombre:string, caracteres:number): string {
    return `${nombre.substring(0,caracteres)}...`;
  }

}
