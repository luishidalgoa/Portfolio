import { Component } from '@angular/core';
import * as AOS from 'aos';
import { PropertiesService } from '../../../shared/services/properties-styles.service';
@Component({
  selector: 'Home-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private propertiesS:PropertiesService) { }

  ngOnInit(): void {
    this.propertiesS.updateStatusParticlesJs(true);

    AOS.init();
  }
  
}
