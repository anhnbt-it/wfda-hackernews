import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from '../model/Article';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit {

  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit(): void {
    
    // First get the article id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const articleIdFormRoute = Number(routeParams.get('articleId'));

    // Find the article that correspond with the id provided in route.
    console.log(this.articleService.findAll());
    this.article = this.articleService.findAll().find(article => article.id === articleIdFormRoute);
  }

}
