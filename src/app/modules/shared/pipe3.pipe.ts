import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe3'
})
export class Pipe3Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}