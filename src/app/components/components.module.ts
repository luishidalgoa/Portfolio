import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonPrimary } from './buttons/primary/button-primary.component';



@NgModule({
  declarations: [ButtonPrimary],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonPrimary,
  ]
})
export class ComponentsModule { }
