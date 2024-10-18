import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { RouterLink } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NavComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
  ],
  exports: [
    NavComponent,
    FooterComponent
  ]
})
export class SharedModule { 
}
