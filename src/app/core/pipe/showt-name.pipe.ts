import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showtName'
})
export class ShowtNamePipe implements PipeTransform {

  transform(fullName: string): string {
    if (!fullName) return '';

    const names = fullName.split(' ');
    return names.length > 1 ? `${names[0]} ${names[1][0].toUpperCase()}.` : names[0];
  }
}
