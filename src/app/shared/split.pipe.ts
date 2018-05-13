import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "split"
})
export class SplitPipe implements PipeTransform {
  transform(input: any, separator: string = "", index: number = 0): string {
    const inputSplitArray = input.toString().split(separator);
    const elementIndex =
      inputSplitArray.length - 1 >= index ? index : inputSplitArray.length - 1;
    let priceValue = inputSplitArray[elementIndex];
    
    if (index > 0 && priceValue.length === 1) {
      priceValue += "0";
    }

    return priceValue;
  }
}
