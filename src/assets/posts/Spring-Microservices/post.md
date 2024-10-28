---
title: 'Spring Microservices'
articleUrl: 'Spring-Microservices'
description: 'En este proyecto, enfoqué mis esfuerzos en crear una aplicación orientada a microservicios con Spring Boot, dejando atrás la estructura monolítica.'
imageUrl: 'https://media.licdn.com/dms/image/v2/D4D12AQGVon2ws6Bcsw/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1730120282633?e=1735776000&v=beta&t=DWa17bPMYXhSiYubru_59yoxs9Iy71ts5CVO1xSFA0k'
tags: [Spring Boot, Docker, Swagger]
degree: ''
type: 'BackEnd'
---

# Creando una Aplicación con Arquitectura Orientada a Microservicios: Un Proyecto Práctico

## Enlaces
- [Github + script docker para el despliegue](https://github.com/luishidalgoa/SpringBootMicroservice)
- [Documentación Api: Microservice-Courses-Students - Team Workspace](https://galactic-crescent-156854.postman.co/workspace/6e7e21b0-4367-49af-8246-fc3174491d32/documentation/31150730-7669aff2-2597-4fae-970b-1375dcc5d398)

## Introducción
En el desarrollo de software, la arquitectura orientada a microservicios ha ganado popularidad como una alternativa eficiente a la arquitectura monolítica tradicional. Este proyecto tiene como objetivo aprender a construir una aplicación utilizando microservicios, donde cada componente opera de manera independiente, permitiendo una mejor escalabilidad, mantenimiento y despliegue. Además, toda la aplicación está dockerizada, lo que facilita su despliegue y administración en diferentes entornos.
---
## ¿Por qué Microservicios?

### Ventajas
- **Escalabilidad**: Los microservicios pueden ser escalados de forma independiente, lo que permite manejar picos de demanda en componentes específicos.
- **Mantenimiento**: Cada microservicio puede ser desarrollado y mantenido por equipos independientes, lo que mejora la colaboración y la agilidad.
- **Despliegue Continuo**: Las actualizaciones de cada microservicio se pueden implementar sin afectar al resto de la aplicación.
---
## Arquitectura
Para visualizar la estructura de nuestra aplicación, hemos creado un diagrama de arquitectura que muestra la interacción entre los diferentes microservicios y el Gateway, además de Eureka que ayuda a localizar los distintos microservicios de la aplicación para su comunicación.

![Diagrama de Arquitectura](ruta/al/diagrama.png) *(reemplaza con la ruta correcta a tu diagrama)*

### Componentes de la Arquitectura
- **Microservicio Course**: Encargado de gestionar los cursos disponibles.
- **Microservicio Student**: Maneja la información de los estudiantes.
- **Gateway**: Actúa como punto de entrada a la API, redirigiendo las solicitudes a los microservicios correspondientes.
---
## Documentación Implementada
La documentación es crucial para la comprensión y uso de la API. En este proyecto, se ha implementado documentación para cada microservicio utilizando Swagger. Sin embargo, hemos encontrado una incompatibilidad entre Spring Gateway y Spring Web, lo que ha impedido integrar la documentación de Swagger en el Gateway. ¡Cualquier recomendación para solucionar esto será bienvenida!

### Documentación de la API

#### Documentación en Postman
Puedes acceder a la documentación pública de la API en Postman mediante el siguiente enlace:
- [Postman Documentation Link](enlace/a/postman) *(reemplaza con el enlace correcto)*

#### Documentación de Swagger
La documentación de Swagger para cada microservicio está disponible en los siguientes enlaces locales:
- **Microservicio Course**: [Swagger Course](http://localhost:8081/swagger-ui/index.html)
- **Microservicio Student**: [Swagger Student](http://localhost:8091/swagger-ui/index.html)
---
## Script Docker-Compose

### Instalación
Para comenzar, asegúrate de tener las siguientes herramientas instaladas en tu sistema:
- **Docker**: Necesitarás Docker o Docker Hub. Puedes seguir la [Guía de instalación de Docker](enlace/a/guia/docker) *(reemplaza con el enlace correcto)* para instalarlo.
- **Docker Compose**: También es necesario instalar Docker Compose. Consulta la [Guía de instalación de Docker Compose](enlace/a/guia/docker-compose) *(reemplaza con el enlace correcto)* para obtener más información.

### Ejecutar el Script
Una vez que tengas Docker y Docker Compose instalados, puedes levantar la infraestructura de microservicios con el siguiente comando en tu terminal:

```bash
docker-compose up
```
---
## Desafíos y Aprendizajes

Durante el desarrollo de este proyecto, hemos enfrentado varios desafíos, desde la configuración de la arquitectura hasta la integración de Swagger. Cada uno de estos obstáculos nos ha proporcionado valiosas lecciones sobre la implementación de microservicios y el uso de Docker.
---
## Conclusiones

Este proyecto ha sido una experiencia enriquecedora en el aprendizaje sobre microservicios y la importancia de una buena documentación. La arquitectura orientada a microservicios no solo mejora la escalabilidad y el mantenimiento, sino que también fomenta un enfoque más flexible en el desarrollo de software.
