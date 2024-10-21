import { Component } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'Home-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
  
}
