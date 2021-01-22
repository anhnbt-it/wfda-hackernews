import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-article-create-form',
  templateUrl: './article-create-form.component.html',
  styleUrls: ['./article-create-form.component.css']
})
export class ArticleCreateFormComponent implements OnInit {

  articleForm = this.formBuilder.group({
    id: '',
    title: '',
    url: ''
  });

  constructor(
    private articleService: ArticleService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.articleForm.value);
    this.articleService.save(this.articleForm.value);
    console.warn('Your article has been submmited', this.articleForm.value);
    this.articleForm.reset();
  }

}
