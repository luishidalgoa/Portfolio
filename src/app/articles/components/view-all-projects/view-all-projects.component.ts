import { Component } from '@angular/core';
import { Proyect } from '../../../Home/models/proyect';
import { PostsService } from '../../services/posts.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-view-all-projects',
  templateUrl: './view-all-projects.component.html',
  styleUrl: './view-all-projects.component.scss'
})
export class ViewAllProjectsComponent {
  public posts!: Proyect[]

  constructor(private _postS: PostsService) {}

  ngOnInit() {
    AOS.init();
    this._postS.getAllPosts().then((data:Proyect[]) => {
      this.posts = data
    })
  }
}
