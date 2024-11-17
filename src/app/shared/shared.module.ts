import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ClipboardButtonComponentComponent } from './components/markdown/clipboard-button-component/clipboard-button-component.component';
import { MarkdownComponent } from './components/markdown/markdown.component';
import { MarkdownModule } from 'ngx-markdown';

import "prismjs/prism"
import "prismjs/components/prism-typescript.min.js"
import "prismjs/components/prism-csharp.min.js"
import "prismjs/components/prism-css.min.js"
import "prismjs/components/prism-java.min.js"
import "prismjs/components/prism-bash.min.js"
import "prismjs/plugins/line-numbers/prism-line-numbers.min.js"


@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
    ClipboardButtonComponentComponent,
    MarkdownComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
    }),
  ],
  exports: [
    NavComponent,
    FooterComponent,
    MarkdownComponent
  ]
})
export class SharedModule { 
}
