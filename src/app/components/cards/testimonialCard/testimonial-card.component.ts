import { Component, Input } from '@angular/core';
import { Proyect } from '../../../Home/models/proyect';

@Component({
  selector: 'card-testimonialCard',
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss'
})
export class TestimonialCard {
  @Input() card!: Proyect;
  @Input() index!: number;

  ngOnInit() {
  }
}
