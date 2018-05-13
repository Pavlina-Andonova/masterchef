import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterBy: string, criteria: string): any[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy && criteria
      ? value.filter(
          (item: any) =>
            item[criteria].toLocaleLowerCase().indexOf(filterBy) !== -1
        )
      : value;
  }
}
