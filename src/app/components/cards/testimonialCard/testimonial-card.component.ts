import { Component, Input } from '@angular/core';
import { Proyect } from '../../../Home/models/proyect';
import { ActivatedRoute, Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'card-testimonialCard',
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss'
})
export class TestimonialCard {
  @Input() card!: Proyect;
  @Input() indices!: {$index: number, posts: number};

  public url!: string;

  public position!: 'left' | 'right' | 'end' | 'first';

  constructor(private _router: Router) {
    
  }

  ngOnInit() {
    AOS.init();
    if(this.indices.$index === 0) {
      this.position = 'first';
    } else if (this.indices.$index % 2 && this.indices.$index !== this.indices.posts - 1) { //si el indice actual es impar y si no es el ultimo elemento del array
      this.position = 'left';
    } else if (this.indices.$index % 2 === 0 && this.indices.$index !== this.indices.posts - 1) { //si es par y no es el ultimo
      this.position = 'right';
    } else if( this.indices.$index === this.indices.posts - 1 && (this.indices.posts -1) %2 === 0) {
      this.position = 'end';
    }

    //extraemos la ruta completa de la url
    if(!this._router.url.split('/')[1].includes('#') && this._router.url.split('/')[1].includes('proyectos')){
      this.url = '../'
    }else{
      this.url = '/'
    }
  }
}
