import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'talla'
})
export class TallaPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (true) {
      case (value >0 && value < 20): return 'XS';
       break;
      case (value >21 && value < 30): return 'S';
       break;
      case (value >31 && value < 50): return 'M';
       break;
      case (value >51 && value < 70): return 'L';
       break;
      case (value >71 && value < 100): return 'XL';
       break;
     
                            
    }  
    return null;
    return null;
  }

}