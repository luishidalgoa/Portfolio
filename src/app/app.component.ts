import { Component, inject, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { DarkModeService } from './shared/services/dark-mode.service';
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'Portfolio';
  darkmode!:boolean;

  public dark_mode: DarkModeService = inject(DarkModeService)
  public renderer = inject(Renderer2)
  
  ngOnInit(): void {
    this.dark_mode.darkMode.subscribe(darkMode => {
      this.darkmode = darkMode
    })
    this.loadParticlesScript().then(() => {
      this.dark_mode.darkMode.subscribe(darkMode => {
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
