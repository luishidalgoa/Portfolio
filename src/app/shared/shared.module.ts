import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { NavComponent } from './nav/nav.component';
import { RouterLink } from '@angular/router';



@NgModule({
  declarations: [
    CardsComponent,
    NavComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
  ],
  exports: [
    CardsComponent,
    NavComponent,
  ]
})
export class SharedModule { 
}
