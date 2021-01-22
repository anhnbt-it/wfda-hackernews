import { Component, OnInit } from '@angular/core';
import { Article } from '../model/Article';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css'],
})
export class ArticleListComponent implements OnInit {

  articles: Article[];
  
  constructor(
    private articleService: ArticleService,
  ) { }

  ngOnInit(): void {
    this.articles = this.articleService.findAll();
  }

}
