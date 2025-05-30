---
title: 'Youtube Music Downloader'
articleUrl: 'Youtube-Music-Downloader'
description: 'Un microservicio para descargar música desde YouTube y almacenarla en la nube o localmente.'
imageUrl: 'https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FYoutube-Music-Downloader%2Flogo.png&version_id=null'
tags: [Spring Boot, Angular, Github Actions, Docker, Swagger]
degree: 'bg-gradient-to-tr from-cyan-300 via-rose-400 to-indigo-900'
type: 'FullStack'
date: '2025-05-29'
--- 

# Enlaces 

Github:
[luishidalgoa/CloudStorage_Project](https://github.com/luishidalgoa/CloudStorage_Project)

Docker Hub: [luishidalgoa/hidalgo-music \| Docker
Hub](https://hub.docker.com/repository/docker/luishidalgoa/hidalgo-music/general)

Página web desplegada:
[DownloadMusicClient](https://levelcloud-music.vercel.app/)

# Descripción del problema

En la actualidad, los usuarios no cuentan con una forma centralizada y
eficiente para gestionar su música personal. Tampoco existe una solución
unificada que permita descargar, almacenar y reproducir música de manera
sencilla y desde distintas fuentes como YouTube.

Además, gestionar estas canciones entre almacenamiento local y en la
nube, así como visualizar progreso de descarga o reproducirlas
fácilmente, representa una necesidad latente.

# Objetivos del proyecto

- Crear un microservicio accesible desde diferentes aplicaciones que
  actúe como galería de música personalizada.
- Permitir a los usuarios:
  - Crear playlists.
  - Visualizar artistas y álbumes.
  - Reproducir canciones.
  - Guardar el progreso de reproducción
- Descargar canciones desde YouTube.
- Almacenar las canciones en la nube (Nextcloud) y localmente.
- Proporcionar seguimiento de descarga mediante SSE.
- Limpiar archivos temporales automáticamente
- Descargar playlists completas.

# Introducción 

El microservicio "Music" es un componente especializado perteneciente al
proyecto CloudStorage que maneja la descarga de música, procesado,
compresión y almacenamiento del mismo. En el índice encontraras
información relevante a cerca de como la arquitectura del proyecto y
Microservicios

# Manual de usuario
A través de la [página web](https://levelcloud-music.vercel.app) desplegada, podrás interactuar con la interfaz, en ella introduciras la url del video o playlist de YouTube que deseas descargar. El microservicio se encargará de procesar la solicitud, descargar el contenido y almacenarlo en tu nube privada o en tu dispositivo local.

![Gift](https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FYoutube-Music-Downloader%2FGuia-usuario.gif&version_id=null)

# Diagramas

## Diagrama de arquitectura de microservicios

<img jpg src="https://github.com/user-attachments/assets/bbb8f7c3-5f21-4d68-88e1-6f122c6ba15a">

### Descripción microservicios:

**Eureka**: Descubrimiento de servicios

**Config**: Configuración centralizada.

**Gateway**: Comunicación entre microservicios.

**Actuator**: Métricas y monitoreo

### Diagrama de secuencia

<img jpg src="https://github.com/user-attachments/assets/9cfbf9e2-3e58-4222-8cbb-25984d99b68b">

# Recursos

**Lenguajes**: Java 21, Python

**Frameworks**: Spring Boot

**Herramientas**: Docker, Maven, Postman, IntelliJ IDEA

**Plugins**: Github Copilot, Prettier, Maven

**Software de terceros**:

- YT-DLP: [yt-dlp/yt-dlp: A feature-rich command-line audio/video
  downloader](https://github.com/yt-dlp/yt-dlp)
- Ffmpeg: [Download
  FFmpeg](https://ffmpeg.org/download.html#build-windows)

# Metodo de trabajo

## GITHUB PROJECTS

La herramienta github Project me ha permitido registrar las tareas
pendientes para mejorar o desarrollar la aplicación. De tal modo que si
encontraba un bug, se me ocurría una idea de mejora o tenia pendiente
documentar algunas cosas... Lo dejaba todo a puntado para que en la
siguiente sesión de trabajo tener el contexto suficiente de trabajo y
conocer el progreso de la tarea en cuestión

## DOCKER

### CONTENEDOR DESARROLLO

El proyecto cuenta con un contenedor de desarrollo , para de este modo
mantener una consistencia de dependencias con el equipo de trabajo.

En 2 sencillos pasos tendrás el proyecto arrancado y listo para seguir
desarrollando donde quieras y como quieras.

1.  Arrancar el contenedor

<img jpg size="7" src="https://github.com/user-attachments/assets/984eec9d-2f2f-4d88-ab8b-ac484ab8cf6d">

2.  Desde el IDE localizar la opción Remote Development y conectarte por
    SSH al contenedor
<img jpg size="7" src="https://github.com/user-attachments/assets/ec328e9d-974b-4d02-88e7-38a6443c9a39">

3.  Como se visualiza en la captura, estarías ya conectado por SSH y
    tendrías acceso completo a los directorios del proyecto

<img jpg src="https://github.com/user-attachments/assets/1ba237ac-5aef-4146-80ed-a8a1d455268b">

***NOTA***

Los ficheros de despliegue en Docker se ubican individualmente por cada
microservicio

#### Ventaja

Gracias a esta técnica, puedo despreocuparme de en un futuro destruir el
contenedor en mi equipo local. Por que, si en un futuro deseo volver a
trabajar en este proyecto o trabajar con mas gente, no tendré que volver
a instalar las múltiples dependencias que necesita como Python, YT-DLP,
etc.. si no que simplemente tendré que descargarme la imagen y
conectarme por SSH.

Además, también permite tener un control mas exacto de las dependencias
utilizadas por el proyecto, lo cual aun que este contenedor no tiene
responsabilidad ninguna sobre el despliegue, puede ser una pieza
importante entender esta técnica para facilitar el despliegue del mismo

### IMAGEN DEL MICROSERVICIO

Mediante un fichero DockerFile, se genera un contenedor basado en
***[Debian12-slim]{.underline}***

Este contenedor tendrá algunas dependencias importantes:

- Ffmpeg
- Wget
- Locales
- ca-certificates
- python3
- python3-pip
- python3-venv
- python3-mutagen
- git
- yt-dlp
- Maven
- Java jdk 21

#### Descripción de la imagen

Este Dockerfile construye una imagen basada en una distribución mínima
de Debian, optimizada para ejecutar una aplicación Java. Instala
únicamente las dependencias necesarias, configura el entorno con
localización en inglés británico y ajusta variables de entorno para la
integración con otros servicios. Detecta la arquitectura del sistema
para descargar e instalar el JDK apropiado y compila automáticamente el
proyecto desde un repositorio remoto, empaquetándolo en un archivo
ejecutable. Finalmente, elimina herramientas de desarrollo innecesarias
para reducir el tamaño de la imagen y define el arranque del contenedor
mediante la ejecución del JAR generado

#### Repositorio docker hub

El repositorio para descargar este contenedor de desarrollo se encuentra
en el siguiente enlace:

[luishidalgoa/levelcloud-dev-container \| Docker
Hub](https://hub.docker.com/repository/docker/luishidalgoa/levelcloud-dev-container/general)

## GITHUB ACTIONS

El proyecto CloudStorage utiliza GitHub Actions para la integración y la
implementación continuas. Las Acciones están diseñadas para compilar,
probar, empaquetar, y desplegar el proyecto en procesos que

<img jpg size="6" src="https://github.com/user-attachments/assets/d8f33b71-afc1-4349-b679-b44aa2553892">

Los flujos se desencadena exclusivamente por los cambios en los archivos
pom.xml, lo que garantiza que solo los cambios significativos en la
dependencia o la estructura inicien el proceso de despliegue.

### Maven Build Process

<img jpg size="8" src="https://github.com/user-attachments/assets/9b951ba8-4071-4ffd-aad7-7406f8f9d163">

1.  Utiliza Oracle JDK 21

2.  Ejecuta el comando de paquete Maven en el directorio del proyecto
    Spring

3.  Archiva los archivos JAR compilados como artefactos

4.  Genera un gráfico de dependencias para supervisar las dependencias
    del proyecto

### Dockerización

La conterizacion es una parte crucial para la estrategia de despliegue,
provee consistencia entre distintos entornos y permite despliegues
escalables

#### Multi-platform Docker Builds

El flujo genera dos imágenes para sistemas con arquitectura **\[AMD
X64\]** y **\[ARM X64\]**. Asegurando la compatibilidad entre varios
tipos de arquitecturas de servidores, incluyendo las plataformas que hoy
en día son cada vez más relevantes como servidores **ARM.**

<img jpg size="5" src="https://github.com/user-attachments/assets/274fd37a-fe7f-4df3-b683-80f48dc1c0a7">

#### PROCESOS INTERNOS DEL DOCKERFILE

El contenedor del servicio de música se ha creado con un enfoque en
minimizar el tamaño e incluir todos los componentes necesarios:

<img jpg size="5" src="https://github.com/user-attachments/assets/79511671-aa85-4462-9320-26495a7079f7">

La imagen resultante de la dockerización tiene algunas características
importantes como:

- Incluye solo las dependencias necesarias

- Detecta el tipo de arquitectura (x64 o ARM) he instala la version del
  JDK de java correspondiente

- Minimiza el tamaño final de la imagen gracias a que limpia todas las
  dependencias y ficheros innecesarios de la imagen y almacenando solo
  el la app de java resultado de la compilación

#### Secuencia de despliegue

Después del proceso de creación de la imagen Docker, el proceso de
despliegue esta totalmente automatizado

<img jpg size="7" src="https://github.com/user-attachments/assets/0332491a-f38c-43f4-ba9c-9a4ab9549d35">


Pasos del proceso de despliegue:

1.  Espera a que la imagen de docker se publique en Docker hub

2.  Se conecta al servidor de producción mediante credenciales SSH
    almacenadas como secretos de GitHub

3.  Ejecuta un script de implementación (**deploy.sh**) que organiza el
    proceso de actualización

4.  Actualiza los contenedores en ejecución con un tiempo de inactividad
    mínimo o nulo

# clonar y arrancar Proyecto

En esta sección se mostrará una guía rápida para poder arrancar el
proyecto en modo desarrollo de manera sencilla y poder interactuar
localmente con el

## variable de entorno del microservicio music

Es fundamental que el microservicio Music tenga un fichero .env en su
ruta relativa con la siguiente información:

<img jpg size="7" src="https://github.com/user-attachments/assets/360b19d3-81b0-49ee-9fc5-5812a87fdfee">

## swagger

Podrás ver la lista de endpoints disponible en el microservicio a través
del servicio Swagger implementado, mediante el siguiente enlace:

http://localhost:8084/swagger-ui/index.html#

NOTA:

Asegurase de tener el proyecto arrancado y en el puerto 8084 o el
indicado en el .env

# Propósito y características

El microservicio ofrece una variedad de funcionalidades activas en el
servicio, como:

- Descarga de música provenientes de fuentes externas (Youtube,
  twitter...)
- Almacenar la música de distintas formas:
  - Dispositivo local del cliente
  - En la nube privada del usuario en levelcloud
- Seguimiento del progreso de descarga en el servidor en tiempo real
- Descarga de metadatos en los videos
- Compresión de múltiples ficheros en un ZIP

# Arquitectura

El microservicio de música opera como parte del ecosistema de
microservicios CloudStorage, trabajando estrechamente con otros
servicios especializados

**(Arquitectura conceptual)**

<img jpg src="https://github.com/user-attachments/assets/a234eba3-4c58-4717-a481-3cd4a28a2646">

**características del servicio música:**

- Esta registrado dentro del servicio de descubrimiento de otros
  servicios (Eureka)
- Obtiene la configuración desde el Config-Server (o de manera local
  según el entorno)
- Se comunica con el microservicio "Nextcloud" para el almacenamiento en
  la nube
- Es accesible desde el microservicio "Gateway", aunque también lo es
  desde su puerto publico

## Workflow descarga

The download process follows a well-defined sequence that varies based
on the download type

El proceso de descarga, sigue una secuencia bien definida que varia en
base al tipo de descarga

<img jpg src="https://github.com/user-attachments/assets/67952727-8959-43b3-8759-c085e6a588b2">

**El flujo demuestra, las capacidades del servicio para**:

1.  Aceptar solicitudes de descarga a través de identificadores únicos
    de sesión

2.  Proceso de descarga a través del tipo de estrategia indicada

3.  Reporte de progreso en tiempo real

4.  Entregar contenido en función del tipo de descarga solicitado

## Estrategia de herencia

El microservicio implementa una estrategia de herencia clave para poder
tener varios tipos de descargas con distintos funcionamientos.

<img jpg src="https://github.com/user-attachments/assets/d1744901-e408-428f-ab0d-c0cb6772b981">

**AbstractDownloadStrategy** define la plantilla para todas las
estrategias de descarga con las implementaciones concretas que manejan
los detalles de:

- Descargas locales (**DownloadLocal**) -- Los ficheros son almacenados
  temporalmente en el servidor, y finalmente los devuelve a través de la
  respuesta http
- Descargas en la nube (**DownloadLevelCloud**) -- Los ficheros son
  subidos a la nube privada del usuario

## Reporte de progreso con server-sent-events (sse)

Una funcionalidad clave del microservicio Music, es el seguimiento de
progreso en tiepo real a través de SSE. Con el objetivo de notificar al
cliente, como va el progreso de descarga en el servidor, y poder tener
una referencia para estimar cuanto tiempo puede llevar la descarga.

<img jpg size="6" src="https://github.com/user-attachments/assets/e1d6a474-706b-427d-beef-a1bbb78bd70a">

### Caracteristicas

Algunas de las características de esta implementación son:

1.  Monitoreo del progreso capturando las salidas por consola de la
    herramienta externa (yt-dlp)

2.  Abre una sesión SSE y emite eventos a través de un controlador
    dedicado

3.  Envía actualizaciones en tiempo real al cliente via SSE

4.  Supports multiple concurrent downloads through ID-based tracking.
    Soporta multiples descargas simultaneas a traves del ID de
    seguimiento

#### Ejemplo de Mensajes SSE

<img jpg size="7" src="https://github.com/user-attachments/assets/c900327e-a4ea-4410-9ad7-175b0476614a">

## Manejo y procesamiento de archivos

Tras la descarga de los ficheros de música y sus metadatos a través de
la herramienta YT-DLP.

El manejo de estos ficheros puede ser:

1.  **Descarga de un fichero individual**:

    - Files are directly streamed to the client or uploaded to Nextcloud
    - Los ficheros son directamente enviados al cliente o subidos a
      nextcloud

2.  **Multiples ficheros (e.g., Playlists)**:

    - Los ficheros son comprimidos en un ZIP antes de enviarlos
    - La utilidad **ZipFile** se encarga de la compresión de varios
      archivos

<img jpg size="6" src="https://github.com/user-attachments/assets/0600ca41-f96d-47bf-a13f-75506f192cee">

## Modelos dto

<img jpg src="https://github.com/user-attachments/assets/7346c4d5-6b75-49cb-b96e-24f2dbf876d9">

Estos modelos faclitan:

- Manejo de solicitudes **DownloadRequestDTO** y **DownloadDataDTO**
- Transferencia de archivos con **FileDTO** y sus implementaciones
- Seguimiento de progreso con **ProgressDto**
- Identificación del tipo de descarga a traves de la enumeración
  **DownloadType** 

# Intragración herramientas externas

El microservicio musica tiene algunas integraciones con herramientas
externas durante el manejo y procesamiento de archivos

<img jpg size="4" src="https://github.com/user-attachments/assets/dbae4f49-7183-4a85-95a1-4be289a5865f">

Algunas herramientas integradas:

- **yt-dlp**: Es una herramienta basada en python, usada para la
  descarga de videos de youtube y otras plataformas
- **FFmpeg**: Usado para el formato de conversion de archivos multimedia

El servicio ejecuta estas herramientas externas para el procesamiento,
monitoreo de sus outputs de información de progreso y el manejo extra de
los ficheros resultantes.

# Despliegue
El back lo tengo actualmente desplegado en un servidor administrado por
mí, como ya se mencionó en la sección [GITHUB ACTIONS](#github-actions).
El proyecto se despliega de forma automática por lo que la única tarea
que debo realizar para el despliegue automático es actualizar la versión
del POM del microservicio y actualizar el repositorio.

El microservicio esta esta desplegado con el protocolo https, de modo
que es perfectamente consumible por otras aplicaciones web basadas en el
mismo protocolo.
