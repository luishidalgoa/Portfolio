---
title: 'Spotify Clon'
articleUrl: 'Spotify-Clon'
description: 'Proyecto realizado con el objetivo de demostrar mis capacidades avanzadas en Angular. Desarrolle unaplicación que consume la API de Spotify e intenta replicar varias de las funcionalidades de la propia Spotify de lforma mas fiel y cuidadosamente posible'
imageUrl: 'https://github.com/luishidalgoa/luishidalgoa/blob/main/Images/portfolio/spotify_clon.png?raw=true'
tags: [Angular]
degree: 'from-violet-500 to-orange-300'
type: 'FrontEnd'
date: '2023-12-23'
---

<img png src="https://github.com/luishidalgoa/luishidalgoa/blob/main/Images/portfolio/spotify_clon.png?raw=true">

# Enlaces:
- **Repositorio:** [Github](https://github.com/luishidalgoa/Spotify_Clon)

> **Nota:** El proyecto está desplegado y funcional, pero debido a que consume la API de Spotify, solo los usuarios registrados en el dashboard de este proyecto en la API pueden acceder completamente.

---

## 1. Introducción

**"Spotify Clon"** es un proyecto **sin ánimo de lucro** y con **fines educativos** que logra un parecido **casi exacto** con la versión web de **Spotify®**.


<iframe style="min-width: 100%;height: 400px;border-radius: 10px;" src="https://www.youtube.com/embed/xYG9SelwimE?si=su8k6m1JpYv2tAtl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<h3 tab="1"> Objetivo:</h3>
<div tab="2">

El motivo por el que decidí clonar la interfaz de usuario de **Spotify** fue el **impacto** que un proyecto como este podría tener en mi **currículum**, sirviendo como una **prueba técnica** de mis habilidades. Además, este proyecto fue realizado durante el **1º trimestre de 2º de DAM**.

Durante el desarrollo, me percaté de que no había ningún proyecto que clonara tan **meticulosamente** la interfaz de Spotify.

</div>

<h3 tab="1">Inconvenientes:</h3>

<div tab="2">

A consecuencia de que estaba consumiendo la **API propietaria de Spotify** y deseaba hacer un **calco 1:1 de su interfaz**, **no me otorgaron los permisos para usar la API de manera pública**, restringiendo su uso estrictamente para el desarrollo. Por lo tanto, **a menos que cambie la API de música, no podré desplegar esta aplicación web para todo el público**.


</div>

---

## 2. Arquitectura del Sistema

- **Guardado del token de sesión**.
- **Uso de ActiveGuards**.
- **Uso de nueva sintaxis de Angular 17**.
- **Cargas lazy con esqueletos de imágenes y contenido**.

---

## 3. Desafíos y Soluciones

Uno de los desafíos con los que me encontré fue que, al igual que hacía **Spotify Web**, quería que, dependiendo del **ancho de la pantalla**, se **renderizara** o se dejaran de renderizar tantas **columnas**. Esto no estaría calculado mediante **CSS**, ya que el objetivo era que dejara de **renderizarse el componente en sí**, y no tanto el mostrar más o menos columnas. Lo implementé mediante **TypeScript**.


<img jpg src="https://github.com/luishidalgoa/luishidalgoa/blob/main/Images/portfolio/spotify_clon/SectionsGift.gif?raw=true">

<h3 tab="1"> Ejemplo de Código:</h3>
<div tab="2">

A continuación, se muestra el **código utilizado** dentro del componente que dibuja la sección:

Lo que hicimos fue **referenciar el elemento contenedor** de las "tarjetas" y, mediante el evento `Resize`, **calculamos cuántas tarjetas caben** en base al tamaño del contenedor (`n / 190`), donde `190` es el **ancho de cada tarjeta**.

Por último, al objeto **`wrapper`** que será utilizado para la **iteración en el HTML**, le agregamos tantos elementos como columnas resulten de este cálculo.
</div>

```typescript
@ViewChild('container') 
container!: ElementRef;

@HostListener('window:resize', ['$event'])
onResize(event: any) {
  const cols = Math.floor(this.container.nativeElement.offsetWidth / 190);
  this.wrapper = [];

  this.section.items?.forEach((item: ReduceData, index: number) => {
    if(index < cols){
      this.wrapper.push(item);
    }
  });
}
```

---
## 4. Futuro del proyecto

Actualmente, se podría decir que **este proyecto no está finalizado**, al menos hasta que cualquier persona pueda **probar e interactuar con la página**.

Aunque este proyecto aún se encuentra **pendiente**, me gustaría **cambiar la API** que consume por otra de acceso **libre y gratuito**, como la de **Audius**. El problema al que me enfrentaría es que tengo **mi modelo de datos construido en base a la API de Spotify**, y requeriría **un trabajo adicional** realizar el cambio, pero **merecería la pena**.
