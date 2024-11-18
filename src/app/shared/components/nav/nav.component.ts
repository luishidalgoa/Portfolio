import { Component, HostListener, inject, OnInit, Renderer2 } from '@angular/core';
import { PropertiesService } from '../../services/properties-styles.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'shared-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public propertiesS = inject(PropertiesService);
  public darkMode: boolean = false;
  bars: boolean = false;

  toggleTheme() {
    this.propertiesS.changeDarkMode();
  }

  toggleBars() {
    this.bars = !this.bars;
  }

  public sections: { id: string; name: string; isActive: boolean; iconClass: string; }[] = [
    { id: 'inicio', name: 'Inicio', isActive: false, iconClass: 'fa-home' },
    { id: 'experiencia', name: 'Experiencia', isActive: false, iconClass: 'fa-briefcase' },
    { id: 'proyectos', name: 'Proyectos', isActive: false, iconClass: 'fa-project-diagram' },
    { id: 'sobre-mi', name: 'Sobre Mí', isActive: false, iconClass: 'fa-user' },
    { id: 'tecnologias', name: 'Tecnologías', isActive: false, iconClass: 'fa-laptop-code' },
  ];

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.setActiveClass();
    this.propertiesS.darkMode.subscribe(darkMode => {
      this.darkMode = darkMode;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.setActiveClass();
  }

  setActiveClass(): void {
    const offsetMargin = 290;
    const scrollPosition = this.getScrollPosition();

    this.sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        const offset = element.offsetTop;
        const height = element.offsetHeight;
        section.isActive = (scrollPosition >= offset - offsetMargin && scrollPosition < offset + height);
      }
    });
  }

  setActiveSection(sectionId: string): void {
    this.sections.forEach(section => {
      section.isActive = section.id === sectionId;
    });

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getIconClass(sectionId: string): string {
    const section = this.sections.find(sec => sec.id === sectionId);
    return section ? section.iconClass : '';
  }

  private _activeRoute: ActivatedRoute = inject(ActivatedRoute);
  private _router: Router = inject(Router);
  navigate(id: string): void {
    const url: string[] = this._router.url.split('/');
    url.shift(); // Quitamos el primer elemento de la url
    if (!url[0].includes('#')) {
      url[0] = '../';
      for (let i = 0; i < url.length; i++) {
        url[0] += '../';
      }
      this._router.navigate([url[0]], { fragment: id })
        .then(() => this.setActiveSection(id));
    }
  }

  private getScrollPosition(): number {
    return window.scrollY || window.pageYOffset || 0;
  }
}
