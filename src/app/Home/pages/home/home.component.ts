import { Component, Renderer2 } from '@angular/core';
import { DarkModeService } from '../../../shared/services/dark-mode.service';

declare var particlesJS: any;

@Component({
  selector: 'Home-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private renderer: Renderer2, private darkMode: DarkModeService) { }

  ngOnInit(): void {
    this.loadParticlesScript().then(() => {
      this.darkMode.darkMode.subscribe(darkMode => {
        if(darkMode) {
          particlesJS.load('particles-js', 'assets/dark-particlesjs-config.json', null);
        }else {
          particlesJS.load('particles-js', 'assets/light-particlesjs-config.json', null);
        }
      })
    }).catch(error => {
      console.error('Error loading particlesJS:', error);
    });
  }

  loadParticlesScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      const script = this.renderer.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
      script.onload = resolve;
      script.onerror = reject;
      this.renderer.appendChild(document.body, script);
    });
  }
}
