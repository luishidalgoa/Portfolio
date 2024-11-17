import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from '../../services/posts.service';
import { Proyect } from '../../../Home/models/proyect';
import * as AOS from 'aos';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.scss'
})
export class BlogPostComponent {
  public url!:string
  public post!:Proyect;

  @ViewChild('markdown') markdown!: MarkdownComponent
  constructor(private _router: ActivatedRoute, private _postS: PostsService){}

  ngOnInit(){
    AOS.init();
    this.url = this._router.snapshot.params['postId']
    this._postS.getPost(this.url).then((data:Proyect) => {
      this.post = data
    })
    this.getContent();
    //rehubicaremos la vista al principio de la pagina cuando se cargue el componente
    window.scrollTo(0, 0)
  }
  markdownContent!: string;
  getContent(){
    this._postS.getContent(`assets/posts/${this.url}/post.md`).then((data:string) => {
      this.markdownContent = data;
    })
  }

}
