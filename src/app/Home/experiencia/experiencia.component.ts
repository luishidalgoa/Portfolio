import { Component } from '@angular/core';

@Component({
  selector: 'home-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss'
})
export class ExperienciaComponent {
  sections: { startDate: Date; endDate: Date;puesto: string;company: string ;description: string; companyLogo?: string }[] = [
    {
      startDate: new Date(2024, 3),
      endDate: new Date(2024, 6),
      puesto: 'Intern Junior Software Developer',
      company: 'Atmira',
      description: 'He formado parte del módulo formativo Acelerate Bootcamp, donde me he capacitado en el uso de la metodología Ágil, control de versiones con Git y tecnologías como Java 8 con Spring Boot y Angular. Durante mi período de prácticas, he participado en el desarrollo de nuevas funcionalidades para una herramienta interna de la empresa (especialmente en el Front con Angular), cuyo trabajo ha sido gratamente valorado.',
      companyLogo: 'https://media.licdn.com/dms/image/v2/C4D0BAQGF5mePJlDTTQ/company-logo_100_100/company-logo_100_100/0/1675940194434/atmira_logo?e=1736985600&v=beta&t=LATxsLmicixo64mVDA1up0gDfYIbAJdmpnINQ2-pY4s'
    },
    {
      startDate: new Date(2020, 3, 1),
      endDate: new Date(2021, 6, 1),
      puesto: 'Técnico informático practicas',
      company: 'Inper Nuevas Tecnologías',
      description: 'Becario en practicas durante la finalizacion de la FP. Medio de sistemas microinformaticos y redes locales.Durante este periodo me especialice como técnico en soluciones informáticas relacionadas con el hardware. Así como realizar instalaciones de red',
      companyLogo: 'https://media.licdn.com/dms/image/v2/C4D0BAQE0k0vxXU8Ygg/company-logo_100_100/company-logo_100_100/0/1630523217892?e=1736985600&v=beta&t=zHyfXvd9UGEOAbmSE8v3xC4o4I34FxvUnfAs1aetIf4'
    },
  ]

}
