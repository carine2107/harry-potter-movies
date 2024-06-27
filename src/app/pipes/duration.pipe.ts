import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true
})
export class DurationPipe implements PipeTransform {

  transform(value: number): string {
    const hours: number = Math.floor(value/ 60);
    const minutes: number = value % 60;
    return `${hours}h ${minutes}min`;
  }

}
