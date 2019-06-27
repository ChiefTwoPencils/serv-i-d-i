import { Pipe, PipeTransform } from '@angular/core';
import { News } from './news-list.service';

@Pipe({
  name: 'newsSearch'
})
export class NewsSearchPipe implements PipeTransform {

  transform(source: News[], searchText: string): News[] {
    if (searchText === undefined || searchText.length == 0) {
      return source;
    }

    let regex = new RegExp(searchText, "i");
    return source.filter(
      news => this.searchFound(news.title, regex) 
           || this.searchFound(news.body, regex)
    ); 
  }

  searchFound(content: string, regex: RegExp): boolean {
    return content.search(regex) >= 0;
  }
}
