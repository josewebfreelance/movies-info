import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformTitle'
})
export class TransformTitlePipe implements PipeTransform {

  transform(value: string, position: number = 0): string {
    if (!value || value.length === 0) return '';

    return value.split(':')[position];
  }

}
