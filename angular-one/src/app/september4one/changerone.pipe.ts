import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'changerone'
})
export class ChangeronePipe implements PipeTransform {

  transform(value: any, count: any[]): any {
    let t1 = value.substr(0, count)
    return t1;
  }

}
