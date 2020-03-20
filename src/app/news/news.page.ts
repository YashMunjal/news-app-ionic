import { Component, OnInit } from '@angular/core';
import { NewsService } from '../news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  data: any;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getData('top-headlines?country=in&pageSize=100').subscribe(data => {
      this.data = data;
    });
  }

  onGoToNewsSinglePage(article) {
    this.newsService.currentArticle = article;
    this.router.navigate(['/news-single']);
  }
  getSearchData(event) {
    var sear = event.target.value;

    if (this.data.status == 'error') {
      this.newsService.getData('top-headlines?country=in&pageSize=100').subscribe(data => {
        this.data = data;
        console.log('hella error');
      });
    }
    if(this.data.status=='ok')
    {
      this.newsService.getData(`everything?qInTitle=${sear}&sortBy=publishedAt&language=en`).subscribe(data => {
        this.data = data;

      });
    }
  }
  categorical(eventc) {
    var cate = eventc.target.value;
    this.newsService.getData(`everything?&country=in&category=${cate}&language=en`).subscribe(data => {
      this.data = data;
    });
  }

}
