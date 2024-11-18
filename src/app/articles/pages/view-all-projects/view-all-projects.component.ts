import { Component } from '@angular/core';
import { Proyect } from '../../../Home/models/proyect';
import * as AOS from 'aos';
import { PostsService } from '../../../shared/services/posts.service';
import { PropertiesService } from '../../../shared/services/properties-styles.service';

@Component({
  selector: 'app-view-all-projects',
  templateUrl: './view-all-projects.component.html',
  styleUrl: './view-all-projects.component.scss'
})
export class ViewAllProjectsComponent {
  public posts!: Proyect[]

  constructor(private _postS: PostsService,private _propertiesS: PropertiesService) {}

  ngOnInit() {
    this._propertiesS.updateStatusParticlesJs(true);

    AOS.init();
    this._postS.getAllPosts().then((data:Proyect[]) => {
      this.posts = data
    })
  }
}
