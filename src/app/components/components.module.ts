import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimary } from './buttons/primary/button-primary.component';
import { SectionTitleComponent } from './texts/section-title/section-title.component';



@NgModule({
  declarations: [ButtonPrimary, 
    SectionTitleComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonPrimary,
    SectionTitleComponent
  ]
})
export class ComponentsModule { }
