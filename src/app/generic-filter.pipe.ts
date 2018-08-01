import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genericFilter'
})
export class GenericFilterPipe implements PipeTransform {
  transform(allObject: any[], param: string, key: string, match: boolean = true): any {
    if (match === true) {
      return allObject.filter(obj => obj[param] === key);
    }
    else {
      return allObject.filter(obj => obj[param] !== key);
    }
  }
}
