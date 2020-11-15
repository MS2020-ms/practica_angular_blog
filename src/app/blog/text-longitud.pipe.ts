import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLongitud'
})
export class TextLongitudPipe implements PipeTransform {

  transform(value: string, length: number): string {
    if (value.length > length) {
      return value.split('').slice(0, length).join('') + ' . . .';
    }
  }
}
