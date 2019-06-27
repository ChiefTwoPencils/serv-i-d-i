import { Component, OnInit } from '@angular/core';
import { NewsService, News } from './news-list.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  newsItems : News[];
  selectedNewsId: number = 0;
  searchText: string;

  constructor(private newsSrvc: NewsService) { }

  ngOnInit() {
    this.newsSrvc
      .getNewsItems()
      .subscribe(
        news => this.newsItems = news,
        error => alert("Sorry, There was a problem loading the data.")
      );
  }

  expandNews(id: number) {
    this.selectedNewsId = id;
    return false; 
  }
}
