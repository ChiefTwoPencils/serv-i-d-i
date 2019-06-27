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

  constructor(private newsSrvc: NewsService) { }

  ngOnInit() {
    this.newsItems = this.newsSrvc.getNewsItems();
  }

  expandNews(id: number) {
    this.selectedNewsId = id;
    return false; 
  }
}
