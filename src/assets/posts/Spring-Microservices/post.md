ddh---
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

<h3 tab="1"> Ventajas </h3>
<div tab="2">

- **Escalabilidad**: Los microservicios pueden ser escalados de forma independiente, lo que permite manejar picos de demanda en componentes específicos.
- **Mantenimiento**: Cada microservicio puede ser desarrollado y mantenido por equipos independientes, lo que mejora la colaboración y la agilidad.
- **Despliegue Continuo**: Las actualizaciones de cada microservicio se pueden implementar sin afectar al resto de la aplicación.
</div>

---
## Arquitectura
Para visualizar la estructura de nuestra aplicación, hemos creado un diagrama de arquitectura que muestra la interacción entre los diferentes microservicios y el Gateway, además de Eureka que ayuda a localizar los distintos microservicios de la aplicación para su comunicación.

<img jpg src="https://media.licdn.com/dms/image/v2/D4D12AQGVon2ws6Bcsw/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1730120282633?e=1735776000&v=beta&t=DWa17bPMYXhSiYubru_59yoxs9Iy71ts5CVO1xSFA0k">

<h3 tab="1"> Componentes de la Arquitectura </h3>
</div tab="2">

- **Microservicio Course**: Encargado de gestionar los cursos disponibles.
- **Microservicio Student**: Maneja la información de los estudiantes.
- **Gateway**: Actúa como punto de entrada a la API, redirigiendo las solicitudes a los microservicios correspondientes.
</div>

---
## Documentación Implementada
<div tab="2">
La documentación es crucial para la comprensión y uso de la API. En este proyecto, se ha implementado documentación para cada microservicio utilizando Swagger. Sin embargo, hemos encontrado una incompatibilidad entre Spring Gateway y Spring Web, lo que ha impedido integrar la documentación de Swagger en el Gateway. ¡Cualquier recomendación para solucionar esto será bienvenida!
</div>

<h3 tab="1">Documentación de la API</h3>

<h4 tab="2">Documentación en Postman</h4>
<div tab="3">
Puedes acceder a la documentación pública de la API en Postman mediante el siguiente enlace:

- [Postman Documentation Link](https://galactic-crescent-156854.postman.co/workspace/6e7e21b0-4367-49af-8246-fc3174491d32/documentation/31150730-7669aff2-2597-4fae-970b-1375dcc5d398) 

</div>

<h4 tab="2"> Documentación de Swagger</h4>
<div tab="3">

La documentación de Swagger para cada microservicio está disponible en los siguientes enlaces locales:
- **Microservicio Course**: [Swagger Course](http://localhost:9090/swagger-ui/index.html)
- **Microservicio Student**: [Swagger Student](http://localhost:8080/swagger-ui/index.html)

</div>

---
## Script Docker-Compose

<h3 tab="1"> Instalación</h3>
<div tab="2">

Para comenzar, asegúrate de tener las siguientes herramientas instaladas en tu sistema:
- **Docker**: Necesitarás Docker o Docker Hub. Puedes seguir la [Guía de instalación de Docker](https://docs.docker.com/get-started/get-docker/)
- **Docker Compose**: También es necesario instalar Docker Compose. Consulta la [Guía de instalación de Docker Compose](https://docs.docker.com/compose/install/standalone/)

</div>

<h3 tab="1"> Ejecutar el Script</h3>
<div tab="2">

Una vez que tengas Docker y Docker Compose instalados, puedes levantar la infraestructura de microservicios con el siguiente comando en tu terminal:
</div>

```bash
docker-compose up
```
---
## Desafíos y Aprendizajes

Durante el desarrollo de este proyecto, hemos enfrentado varios desafíos, desde la configuración de la arquitectura hasta la integración de Swagger. Cada uno de estos obstáculos nos ha proporcionado valiosas lecciones sobre la implementación de microservicios y el uso de Docker.

---
## Conclusiones

Este proyecto ha sido una experiencia enriquecedora en el aprendizaje sobre microservicios y la importancia de una buena documentación. La arquitectura orientada a microservicios no solo mejora la escalabilidad y el mantenimiento, sino que también fomenta un enfoque más flexible en el desarrollo de software.
