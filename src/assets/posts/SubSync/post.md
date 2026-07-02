---
title: 'SubSync: Automatización de descargas musicales'
articleUrl: 'SubSync'
description: 'Herramienta CLI para automatizar periodicamente descarga de las ultimas novedades en la industria musical.'
imageUrl: 'https://s3.minio.hdglabs.com/portfolio/posts/SubSync/logo_no_background.png'
tags: [Python, Docker, Git]
degree: 'bg-white'
type: 'BackEnd'
date: '2025-09-01'
visible: true
--- 

# 🎶 Proyecto: Automatización de descargas musicales y streaming personal con Navidrome

Mantener mi biblioteca musical actualizada siguiendo a varios artistas en YouTube era un proceso imposible de escalar. Había que buscar manualmente los lanzamientos, descargarlos, convertirlos a MP3, ordenarlos en carpetas y añadir metadatos. Todo esto hacía que disfrutar de mi música dependiera más del esfuerzo que de la experiencia.  

Por eso decidí crear un sistema que automatizara absolutamente todo el flujo: desde la detección de nuevos lanzamientos hasta su organización final en un servidor de música personal.  

En cuestion de días puedes armarte una libreria de musica de mas de 10,000 canciones y disfrutarla sin preocuparte de anuncios de publicidad.
---

## 🚀 ¿Qué hace este sistema?

- **Se suscribe automáticamente** a artistas desde un archivo de configuración.  
- **Descarga solo lo nuevo** desde la última ejecución.  
- **Convierte y normaliza** pistas a MP3 (con soporte también para M4A).  
- **Organiza carpetas** por artista y álbum, eliminando duplicados y previsualizaciones.  
- **Enriquece metadatos y carátulas** usando la API de Deezer.  
- Todo corre de forma **automática gracias a un scheduler** que planifica cuándo se ejecutan las descargas.  

El resultado: una biblioteca siempre actualizada, lista para usarse con cualquier reproductor o servidor de streaming.  

---

## 🛠️ Cómo está construido

Para mantener el sistema escalable y mantenible lo diseñé con **arquitectura Onion**, separando responsabilidades en distintas capas:  

- **Dominio** → entidades y contratos (Jobs, Metadata, comandos base).  
- **Aplicación** → orquestación de tareas de descarga y postprocesado.  
- **Infraestructura** → integración con herramientas externas (yt-dlp, ffmpeg, Deezer API, persistencia en JSON/SQLite).  
- **Presentación** → interfaz de línea de comandos con órdenes como `run_now`, `check_jobs`, `list_artists`.  

Esta estructura permite sustituir componentes sin afectar la lógica central: por ejemplo, cambiar el motor de descargas o añadir nuevos formatos de audio.  

---

## 🔄 El ciclo del scheduler

El corazón del sistema es el **SchedulerService**, que se encarga de decidir cuándo hay que lanzar un nuevo job de descargas.  

<img jpg size="6" src="https://s3.minio.hdglabs.com/portfolio/posts/SubSync/schedule_life_cycle.png">

<br>

De esta forma, el sistema trabaja de manera autónoma, ejecutando solo lo necesario y sin duplicar tareas.  

---

## ⚡ Instalación y configuración

### 1. Clonar el repositorio
```bash
git clone https://github.com/tuusuario/yt-music-downloader.git
cd yt-music-downloader
```

### 2. Crear entorno de configuración

#### 2.1 `artists.json`
En la carpeta **config/** crea el archivo **artists.json**:  
```json
[
  {
    "name": "Myke Towers",
    "channel_url": "https://www.youtube.com/channel/UCLk8IJ1TwI7Xl7UUfAD8xPQ"
  }
]
```

#### 2.2 `last_run.json`
Define la última vez que se comprobó cada artista.  
⚠️ La clave debe coincidir con el campo `"name"` de **artists.json**:  
```json
{
  "Myke Towers": "2020-01-09T08:31:22"
}
```

#### 2.3 Archivo de cookies (opcional)
Si YouTube bloquea descargas, puedes exportar cookies desde tu navegador:  
1. Usa extensiones como [Export Cookies](https://chromewebstore.google.com/detail/get-cookiestxt-locally/cclelndahbckbenkjhflpdbgdldlbecc).  
2. Copia el contenido en **config/_cookies.example.txt**.  
3. Renómbralo a **_cookies.txt** para activarlo.  

---

### 3. Variables de entorno (`.env`)
Ejemplo de archivo en **config/.env**:  
```env
# Ruta donde se guardará la música descargada
ROOT_PATH=/music

# Ruta de configuración
CONFIG_PATH=./config

# Intervalo de ejecución del scheduler en días
SCHEDULE_INTERVAL_DAYS=5
```

---

## 🐳 Ejecución con Docker

### 1. Construir y levantar el servicio
```bash
docker compose up -d --build
```

### 2. Volúmenes principales
- `./output:/music` → Carpeta local donde se guardan las descargas.  
- `./config:/app/config` → Configuración persistente (`artists.json`, `last_run.json`).  
- `./app:/app/app` → Código fuente para desarrollo.  

---

## 🖥️ Ejecución local (sin Docker)

1. Instalar dependencias del sistema:  
```bash
sudo apt update && sudo apt install ffmpeg python3 python3-pip
```

2. Instalar dependencias Python:  
```bash
pip install -r requirements.txt
```

3. Instalar yt-dlp:  
```bash
python -m pip install -U yt-dlp
```

4. Listar comandos disponibles:  
```bash
yt-subs --list
```

5. Arrancar en modo por defecto:  
```bash
yt-subs
```

---

## 📡 Mi servicio de streaming con Navidrome

Como paso final monté mi propio servidor de música con **Navidrome**:  

1. Desplegué la imagen oficial en Docker con `docker-compose`.  
2. Lo expuse en un dominio propio con certificado SSL (reverse proxy con Nginx).  
3. Accedo a mi biblioteca desde cualquier dispositivo usando apps de la comunidad

### Aplicaciones compatibles
- Aonsoku (Windows, Mac): [Repositorio](https://github.com/victoralvesf/aonsoku)
- Symphonium (Android): [Google Play](https://play.google.com/store/apps/details?id=app.symfonik.music.player&hl=en-US)
- Musiver (iOS, Android ,Windows, MacOs): [App Store](https://apps.apple.com/us/app/musiver-enjoy-music/id6449966496)

El resultado es una experiencia similar a Spotify o YouTube Music, pero con **mi colección, mi control y sin depender de servicios externos**.  

<img png="8" src="https://s3.minio.hdglabs.com/portfolio/posts/SubSync/Home_Preview.png">
<br>
<img png size="8" src="https://s3.minio.hdglabs.com/portfolio/posts/SubSync/Song_view.png">

---

## 🔎 Conclusión

Este proyecto combina **automatización**, **arquitectura limpia** y **contenedorización** para resolver un problema real: mantener mi música organizada y siempre disponible.  
Es un ejemplo práctico de cómo aplicar la automatización a un proyecto real
