import { PipeTransform,Pipe } from "@angular/core";

@Pipe({
    name:'splitComma'
})
export class splitComma implements PipeTransform{
    transform(val:string):string[] {
        return val.split(',');
      }
}