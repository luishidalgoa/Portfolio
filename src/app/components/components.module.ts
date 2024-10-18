import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimary } from './buttons/primary/button-primary.component';
import { SectionTitleComponent } from './texts/section-title/section-title.component';
import { TestimonialCard } from './cards/testimonialCard/testimonial-card.component';



@NgModule({
  declarations: [ButtonPrimary, 
    SectionTitleComponent,
    TestimonialCard
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonPrimary,
    SectionTitleComponent,
    TestimonialCard
  ]
})
export class ComponentsModule { }
