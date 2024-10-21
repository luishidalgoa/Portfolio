import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BlogPostComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
  ]
})
export class ArticlesModule { }
