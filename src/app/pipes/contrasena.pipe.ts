import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value:string, isShow:Boolean):string {
    return (isShow) ? value : '*'.repeat(value.length);
  }

}
