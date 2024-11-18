import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/pages/home/home.component';
import { ProyectosComponent } from './Home/proyectos/proyectos.component';
import { ViewAllProjectsComponent } from './articles/pages/view-all-projects/view-all-projects.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'proyectos',
    component: ViewAllProjectsComponent
  },
  {
    path: 'articles',
    loadChildren: () => import('./articles/articles-routing.module').then(m => m.ArticlesRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
