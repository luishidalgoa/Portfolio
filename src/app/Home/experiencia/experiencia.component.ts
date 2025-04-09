import { Component } from '@angular/core';

@Component({
  selector: 'home-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrl: './experiencia.component.scss'
})
export class ExperienciaComponent {
  sections: { startDate: Date; endDate?: Date;puesto: string;company: string ;description: string; companyLogo?: string }[] = [
    {
      startDate: new Date(2025, 3, 13),
      puesto: 'Intern Junior Software Developer',
      company: 'DeUser',
      description: 'Durante el periodo de practicas he desarrollado un rol de automatización de procesos internos en la empresa, usando herramientas de la switft de Microsoft 365 como Power Automate, Power Apps y Share Point. He desarrollado una aplicación para crear etiquetas de productos para posteriormente imprimirlas. De esta manera los encargados del almacen podran identificar los productos de manera mas rapida y eficiente.',
      companyLogo: 'https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=shared%2Fdeuser_logo.jpg&version_id=null'
    },
    {
      startDate: new Date(2024, 3),
      endDate: new Date(2024, 6),
      puesto: 'Intern Junior Software Developer',
      company: 'Atmira',
      description: 'He formado parte del módulo formativo Acelerate Bootcamp, donde me he capacitado en el uso de la metodología Ágil, control de versiones con Git y tecnologías como Java 8 con Spring Boot y Angular. Durante mi período de prácticas, he participado en el desarrollo de nuevas funcionalidades para una herramienta interna de la empresa (especialmente en el Front con Angular), cuyo trabajo ha sido gratamente valorado.',
      companyLogo: 'https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=shared%2Fatmira_logo.jpeg&version_id=null'
    },
    {
      startDate: new Date(2020, 3, 1),
      endDate: new Date(2020, 6, 1),
      puesto: 'Técnico informático practicas',
      company: 'Inper Nuevas Tecnologías',
      description: 'Becario en practicas durante la finalizacion de la FP. Medio de sistemas microinformaticos y redes locales.Durante este periodo me especialice como técnico en soluciones informáticas relacionadas con el hardware. Así como realizar instalaciones de red',
      companyLogo: 'https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=shared%2FINPER.jpeg&version_id=null'
    },
  ]

}
