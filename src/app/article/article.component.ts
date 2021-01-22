import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ArticleService } from '../service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  articleForm = this.formBuilder.group({
    title: '',
    url: ''
  });


  constructor(
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  onSubmit(): void {
    // this.articleService.save(this.articleForm.value);
    console.warn('Your article has been submitted', this.articleForm.value);
    this.articleForm.reset();
  }

}
