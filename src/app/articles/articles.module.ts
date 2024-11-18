import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesRoutingModule } from './articles-routing.module';
import { CLIPBOARD_OPTIONS, MarkdownModule, provideMarkdown } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { ClipboardButtonComponentComponent } from '../shared/components/markdown/clipboard-button-component/clipboard-button-component.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    BlogPostComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class ArticlesModule { }
