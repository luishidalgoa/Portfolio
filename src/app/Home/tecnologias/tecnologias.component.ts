import { Component } from '@angular/core';

@Component({
  selector: 'home-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.scss'
})
export class TecnologiasComponent {
  techs: { name: string}[] = [
    {name: 'Angular'},
    {name: 'RxJS'},
    {name: 'SpringBoot'},
    {name: 'SpringSecurity'},
    {name: 'Java'},
    {name: 'Python'},
    {name: 'TailwindCSS'},
    {name: 'Typescript'},
    {name: 'MySQL'},
    {name: 'MongoDB'},
    {name: 'Git'},
    {name: 'Jest'},
    {name: 'Docker'},

  ]
}
