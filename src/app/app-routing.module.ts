import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleCreateFormComponent } from './article-create-form/article-create-form.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  { path: '', component: ArticleComponent },
  { path: 'create', component: ArticleCreateFormComponent },
  { path: 'details/:articleId', component: ArticleDetailsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
