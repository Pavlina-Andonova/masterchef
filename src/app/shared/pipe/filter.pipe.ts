import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(value: any, category: string): any {
    if (value && value.length > 0) {
      value = value.filter(item => (item.type === category));
    }
    return value;
  }
}
