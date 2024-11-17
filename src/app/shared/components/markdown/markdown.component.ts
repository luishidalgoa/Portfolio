import { Component, ElementRef, HostListener, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { MarkdownComponent as Markdown } from 'ngx-markdown';

@Component({
  selector: 'shared-markdown',
  templateUrl: './markdown.component.html',
  styleUrl: './markdown.component.scss'
})
export class MarkdownComponent {
  @Input() data!: string;
  @ViewChild('markdown') markdownElement!: Markdown;

  ngOnInit() {
    setTimeout(() => {
      this.onResize(null);
    },100)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(window.innerWidth < 1024){
      this.markdownElement.element.nativeElement.querySelectorAll('pre').forEach(pre => pre.style.maxWidth = `${document.querySelector('main')!.offsetWidth - 50}px`);
    }
  }
}
