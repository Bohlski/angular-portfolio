import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLimit'
})
export class TextLimitPipe implements PipeTransform {

  transform(value: string, limit?: number): string {
    let DEFAULT_MAX = 78;
    if (limit) {
      return (value.length > limit) ? value.slice(0, limit) + '...' : value;
    }
    return (value.length > DEFAULT_MAX) ? value.slice(0, DEFAULT_MAX) + '...' : value;
  }

}
