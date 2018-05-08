import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterBy: string): any[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy
      ? value.filter(
          (menuItem: any) =>
            menuItem.title.toLocaleLowerCase().indexOf(filterBy) !== -1
        )
      : value;
  }
}
