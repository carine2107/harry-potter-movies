import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFormatter',
  standalone: true
})
export class ArrayFormatterPipe implements PipeTransform {
  transform(value: string[]): string {
    return value.join(', ');
  }

}
