import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { PropertiesService } from '../../shared/services/properties-styles.service'
@Component({
  selector: 'home-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.scss'
})
export class TecnologiasComponent {

  constructor(private propertiesS:PropertiesService){}
  techs: { name: string}[] = [
    {name: 'Angular'},
    {name: 'RxJS'},
    {name: 'SpringBoot'},
    {name: 'SpringSecurity'},
    {name: 'Java'},
    {name: 'PHP'},
    {name: 'TailwindCSS'},
    {name: 'Typescript'},
    {name: 'MySQL'},
    {name: 'MongoDB'},
    {name: 'Git'},
    {name: 'Jest'},
    {name: 'Docker'},
    {name: 'Power Automate'},
    {name: 'Power Apps'},
    {name: 'Share Point'},
  ]

  @ViewChildren('techDiv') techDivs!: QueryList<ElementRef>; //obtenemos todos los elementos con la coincidencia del selector
  onMouseMove(event: MouseEvent, index: number) {
    const li = this.techDivs.toArray()[index].nativeElement;
    
    const x = event.offsetX / li.offsetWidth; //estamos obteniendo del 0-1 la posicion de izquierda-derecha del mouse dentro del objeto en base a los pixeles del elemento
    const y = event.offsetY / li.offsetHeight;

    li.querySelector('.light').style.setProperty('opacity', `${this.propertiesS.darkMode.getValue() ? '.5' : '1'}`);
    
    li.style.setProperty('--x', `${x * 100}%`);
    li.style.setProperty('--y', `${y * 100}%`);
  }

  onMouseLeave(event: MouseEvent, index: number) {
    const li = this.techDivs.toArray()[index].nativeElement;
    //bajamos la opacidad a 0
    li.querySelector('.light').style.setProperty('opacity', '0%');
  }
}
