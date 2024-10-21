import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ButtonPrimary } from './buttons/primary/button-primary.component';
import { SectionTitleComponent } from './texts/section-title/section-title.component';
import { TestimonialCard } from './cards/testimonialCard/testimonial-card.component';
import { ViewMoreComponent } from './buttons/view-more/view-more.component';
import { GroupElementsCardComponent } from './cards/group-elements-card/group-elements-card.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [ButtonPrimary, 
    SectionTitleComponent,
    TestimonialCard,
    ViewMoreComponent,
    GroupElementsCardComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink
  ],
  exports: [
    ButtonPrimary,
    SectionTitleComponent,
    TestimonialCard,
    ViewMoreComponent
  ]
})
export class ComponentsModule { }
