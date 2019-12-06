import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test100'
})
export class Test100Pipe implements PipeTransform {

  transform(data:any,stringText:string): any {
    if(stringText==undefined){
      return data;
    }
    return data.filter((searchText)=>{
      return searchText.title.toLowerCase().match(stringText.toLowerCase())
    })
  }
}
