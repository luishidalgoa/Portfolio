import { Component, HostListener, OnInit } from '@angular/core';
import { Technologies } from '../../core/models/enum/technologies';
import { Proyect } from '../models/proyect';

@Component({
  selector: 'home-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.scss'
})
export class ProyectosComponent implements OnInit{
  cardsRendered: Proyect[] = [];
  cards: Proyect[] = [

    {
      title: 'Project Management Tool',
      articleUrl: 'https://github.com',
      description: 'La usabilidad se centra en permitir a los usuarios gestionar proyectos y tareas de manera fluida y colaborativa. Desde la creación de proyectos hasta la asignación y seguimiento de tareas.',
      imageUrl: 'https://github.com/luishidalgoa/luishidalgoa/blob/main/Images/portfolio/fct_atmira.png?raw=true',
      tags: [Technologies.Angular,Technologies.SpringBoot, Technologies.MySQL,Technologies.Tailwind,Technologies.Sass],
      degree: 'from-blue-800 to-indigo-900',
      type: 'FullStack'
    },
    {
      title: 'Spotify Clon',
      articleUrl: 'https://github.com',
      description: 'Proyecto realizado con el objetivo de demostrar mis capacidades avanzadas en Angular. Desarrolle una aplicación que consume la API de Spotify e intenta replicar varias de las funcionalidades de la propia Spotify de la forma mas fiel y cuidadosamente posible',
      imageUrl: 'https://github.com/luishidalgoa/luishidalgoa/blob/main/Images/portfolio/spotify_clon.png?raw=true',
      tags: [Technologies.Angular],
      degree: 'from-violet-500 to-orange-300',
      type: 'FrontEnd'
    },
    {
      title: 'JavaFX Music Player',
      articleUrl: 'https://github.com',
      description: 'Se trata de una aplicación de música hecha en JavaFX, que tiene varias funcionalidades interesantes y que ha sido el resultado de un trabajo colaborativo.',
      imageUrl: 'https://github.com/luishidalgoa/luishidalgoa/blob/main/Images/portfolio/JavaFX%20Music%20Player.png?raw=true',
      tags: [Technologies.Angular],
      degree: 'from-violet-400 to-purple-300',
      type: 'FullStack'
    }
  ]

  ngOnInit() {
    this.onResize(null);
  }
  

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    console.log(window.innerWidth);
    if(window.innerWidth < 640){
      this.cardsRendered = this.cards.slice(0, 1);
    }else if(window.innerWidth < 1024){
      this.cardsRendered = this.cards.slice(0, 2);
    }else if(window.innerWidth >= 1024){
      this.cardsRendered = this.cards.slice(0, 3);
    }
  }
}
//tamaños resoluciones mobil: < 568px , tablet: < 768px, desktop: > 768px