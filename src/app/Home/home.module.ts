import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from "../shared/shared.module";
import { ComponentsModule } from '../components/components.module';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';



@NgModule({
  declarations: [
    BannerComponent,
    HomeComponent,
    ExperienciaComponent,
    ProyectosComponent,
    SobreMiComponent,
    TecnologiasComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule
  ]
})
export class HomeModule { }
