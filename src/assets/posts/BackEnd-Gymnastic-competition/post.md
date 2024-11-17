---
title: 'Backend Gymnastic Competition'
articleUrl: 'BackEnd-Gymnastic-competition'
description: 'El objetivo de este proyecto es desarrollar un gestor de competiciones de gimnasia rítmica que facilite la organización y el seguimiento de eventos deportivos. El gestor permitirá crear las pruebas y los participantes de cada competición, así como asignar el horario de cada actuación según el orden establecido.'
imageUrl: 'https://firebasestorage.googleapis.com/v0/b/portfolio-c9278.appspot.com/o/BackEnd-Gymnastic-competition%2FLogo.png?alt=media&token=d6f89c6d-dc79-4b6e-8ff6-efeae989c3b8'
tags: [Java,MySQL]
degree: 'bg-gradient-to-r from-rose-400 to-red-500'
type: 'FullStack'
---

## Enlaces:

- **Link del repositorio Github**: [Repositorio](#)

> **Nota**: El BackEnd de la aplicación web está alojado en un hosting gratuito, por lo que es probable que la primera consulta a la API demore al menos 5 minutos.

---

# Gestor de competición de gimnasia rítmica

La gimnasia rítmica es una disciplina deportiva que requiere de una gran coordinación, flexibilidad y expresividad. Se trata de realizar ejercicios con diferentes aparatos (cuerda, aro, pelota, mazas y cinta) siguiendo el ritmo de la música y cumpliendo unos requisitos técnicos y artísticos. Para organizar y evaluar las competiciones de este deporte se necesita un sistema que permita gestionar los datos de las pruebas, los participantes y los resultados.

En este artículo os presentamos el proyecto grupal que hemos realizado en el segundo trimestre del primer curso del ciclo formativo de grado superior de Desarrollo de Aplicaciones Multiplataforma (DAM) en el IES Francisco de los Ríos. Se trata de un gestor de competición de gimnasia rítmica basado en Java y XML, que hemos desarrollado entre Jose Javier Galan, Isabel Roldán y yo. Nuestro objetivo ha sido crear una aplicación que facilite la organización y seguimiento de eventos deportivos de esta modalidad.

## Características del gestor
<img src="https://static.wixstatic.com/media/b8a3e7_b34e15fbed1240a39a24086fe01a6621~mv2.png/v1/fill/w_549,h_656,al_c,usm_0.66_1.00_0.01/IMG_2055_PNG.png">
Nuestro gestor de competición de gimnasia rítmica tiene las siguientes características:

- Permite crear las pruebas y los participantes de cada competición, introduciendo los datos necesarios como el nombre, la categoría, el aparato y la dificultad.
- Permite asignar el horario de cada actuación según el orden establecido por la organización, teniendo en cuenta el tiempo estimado de cada ejercicio y los posibles descansos.
- Permite consultar los resultados y las clasificaciones de cada prueba y categoría, mostrando las puntuaciones obtenidas por cada participante en los aspectos técnicos y artísticos, así como la nota final.
- Utiliza XML como formato de almacenamiento y transferencia de datos, lo que facilita la interoperabilidad con otros sistemas y la persistencia de la información.
- Utiliza Java como lenguaje de programación, aprovechando sus ventajas como la portabilidad, la robustez y la orientación a objetos.

## Metodología y herramientas utilizadas
<img src="https://th.bing.com/th/id/R.d707c90e2dea107665a5e3173ed44b7f?rik=Bq188bYXZw5cLw&pid=ImgRaw&r=0">

Para desarrollar nuestro proyecto hemos seguido una metodología ágil basada en los principios del manifiesto ágil. Hemos trabajado en iteraciones cortas, entregando versiones funcionales del producto al final de cada una. Hemos aplicado las prácticas de integración continua, revisión de código y refactorización para asegurar la calidad del código. Hemos utilizado GitHub como plataforma para alojar nuestro repositorio remoto y facilitar el trabajo colaborativo.

Además, hemos aplicado el patrón MVC (Modelo-Vista-Controlador) para separar las responsabilidades del sistema en tres capas:

- La capa **modelo** se encarga de gestionar los datos del sistema, utilizando clases que representan las entidades del dominio (prueba, participante, resultado) y que se almacenan en ficheros XML.
- La capa **vista** se encarga de mostrar la información al usuario, utilizando interfaces gráficas que permiten interactuar con el sistema mediante botones, menús, tablas y gráficos.
- La capa **controlador** se encarga de coordinar las acciones del usuario con el modelo y la vista, utilizando clases que implementan la lógica del negocio y que se comunican con el modelo mediante el uso de parsers XML.

### Herramientas y librerías utilizadas:

- Para la capa **modelo** hemos utilizado **JAXB** (Java Architecture for XML Binding), que permite generar clases Java a partir de esquemas XML y viceversa.

## Conclusiones

Para finalizar este artículo de blog, me gustaría compartir con vosotros algunas conclusiones sobre el proyecto que hemos realizado. Creo que ha sido una experiencia muy enriquecedora y formativa, tanto a nivel técnico como personal.

A nivel técnico, hemos aprendido a utilizar Java y XML para desarrollar una aplicación de gestión de competiciones de gimnasia rítmica, aplicando los conceptos de la programación orientada a objetos, el patrón MVC y las buenas prácticas del desarrollo ágil. Hemos podido comprobar la utilidad y versatilidad de estos lenguajes y herramientas para crear una solución que responda a las necesidades de los usuarios y que sea fácil de usar, modificar y ampliar.

A nivel personal, hemos trabajado en equipo de forma colaborativa y coordinada, utilizando GitHub para compartir el código y comunicarnos. Hemos repartido las tareas según las habilidades y preferencias de cada uno, y hemos resuelto los problemas y dudas que han surgido durante el proceso. Hemos valorado el esfuerzo y el trabajo de cada miembro del equipo, así como el feedback y las sugerencias que nos hemos dado entre nosotros.

Creo que este proyecto nos ha servido para mejorar nuestras competencias como desarrolladores y como personas, y para demostrar lo que somos capaces de hacer con nuestra creatividad e ilusión. Espero que os haya gustado nuestro proyecto y que os animéis a probarlo. Gracias por leer este artículo y hasta la próxima.

## Colaboradores

- Isabel Roldán Córdoba: [Enlace a Linkedin](https://www.linkedin.com/in/isabel-rold%C3%A1n-a0576b19a/)
- Jose Javier Galán Salazar: [Enlace a Linkedin](https://www.linkedin.com/in/jose-javier-galan-8b9b401a9/)
- Luis Hidalgo Aguilar: [Enlace a Linkedin](https://www.linkedin.com/in/luis-hidalgo-aguilar-576463231/)
