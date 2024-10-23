import { Component, HostListener, inject, OnInit } from '@angular/core';
import { DarkModeService } from '../../services/dark-mode.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'shared-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent implements OnInit {
  public dark_mode = inject(DarkModeService);
  public darkMode: boolean = false;
  bars: boolean = false;

  toggleTheme() {
    this.dark_mode.changeDarkMode();
  }
  toggleBars() {
    this.bars = !this.bars
  }



  public sections: { id: string; name: string; isActive: boolean; iconClass: string; }[] = [
    { id: 'inicio', name: 'Inicio', isActive: false, iconClass: 'fa-home' },
    { id: 'experiencia', name: 'Experiencia', isActive: false, iconClass: 'fa-briefcase' },
    { id: 'proyectos', name: 'Proyectos', isActive: false, iconClass: 'fa-project-diagram' },
    { id: 'sobre-mi', name: 'Sobre Mí', isActive: false, iconClass: 'fa-user' },
    { id: 'tecnologias', name: 'Tecnologías', isActive: false, iconClass: 'fa-laptop-code' },
  ];

  ngOnInit(): void {
    this.setActiveClass();
    this.dark_mode.darkMode.subscribe(darkMode => {
      this.darkMode = darkMode
    })
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.setActiveClass();
  }

  setActiveClass(): void {
    const offsetMargin = 290;
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.sections.forEach(section => {
      const element = document.getElementById(section.id);
      if (element) {
        const offset = element.offsetTop;
        const height = element.offsetHeight;
        if (scrollPosition >= offset - offsetMargin && scrollPosition < offset + height) {
          section.isActive = true;
        } else {
          section.isActive = false;
        }
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
    //si la url actual es la principal usaremos # + item.id. Si no lo es, usaremos tantos ../ como niveles de profundidad
    const url: string[] = this._router.url.split('/')
    console.log(url)
    url.shift() //quitamos el primer elemento de la url
    if (!url[0].includes('#')) {
      //iremos hacia atras en la ruta relativa en base a la profundidad del array
      url[0] = '../'
      for (let i = 0; i < url.length; i++) {
        url[0] += '../'
      }
      //navegamos a la ruta + item.id
      this._router.navigate([url[0]], { fragment: id })
      .then((()=>this.setActiveSection(id)));
    }
  }
}
