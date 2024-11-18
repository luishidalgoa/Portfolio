import { Component, inject, OnInit, Renderer2, ChangeDetectorRef } from '@angular/core';
import { PropertiesService } from './shared/services/properties-styles.service';
declare var particlesJS: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  darkmode!: boolean;
  particlesJS: boolean = false;

  public propertiesS: PropertiesService = inject(PropertiesService);
  public renderer = inject(Renderer2);
  public cdr = inject(ChangeDetectorRef); // Inyecta el ChangeDetectorRef

  ngOnInit(): void {
    this.propertiesS.darkMode.subscribe(darkMode => {
      setTimeout(() => {
        this.darkmode = darkMode;
        this.cdr.detectChanges(); // Forzar la detección de cambios
      });
    });

    this.propertiesS.particlesJs.subscribe(particlesJs => {
      this.particlesJS = particlesJs;
      this.cdr.detectChanges(); // Forzar la detección de cambios
      if (particlesJs) {
        this.loadParticlesScript().then(() => {
          this.propertiesS.darkMode.subscribe(darkMode => {
            if (darkMode) {
              particlesJS.load('particles-js', 'assets/dark-particlesjs-config.json', null);
            } else {
              particlesJS.load('particles-js', 'assets/light-particlesjs-config.json', null);
            }
          });
        }).catch(error => {
          console.error('Error loading particlesJS:', error);
        });
      }
    });
  }

  ngAfterViewInit(): void {
    // Si necesitas hacer algo después de la inicialización de la vista
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
