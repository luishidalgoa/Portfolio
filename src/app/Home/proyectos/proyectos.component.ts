import { Component, HostListener, OnInit } from '@angular/core';
import { Proyect } from '../models/proyect';
import { PostsService } from '../../shared/services/posts.service';
@Component({
  selector: 'home-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent implements OnInit{
  cardsRendered: Proyect[] = [];
  posts: Array<Proyect> = []
  
  constructor(private _postS: PostsService) { }
  ngOnInit() {
    this._postS.getAllPosts().then((data:Proyect[]) => {
      this.posts = data
      this.onResize(window)
    })
  }
  

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if(window.innerWidth < 640){
      this.cardsRendered = this.posts.slice(0, 1);
    }else if(window.innerWidth < 1024){
      this.cardsRendered = this.posts.slice(0, 2);
    }else if(window.innerWidth >= 1024){
      this.cardsRendered = this.posts.slice(0, 3);
    }
  }
}