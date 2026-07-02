---
title: 'Project Management Tool'
articleUrl: 'Project-Management-Tool'
description: 'La usabilidad se centra en permitir a los usuarios gestionar proyectos y tareas de manera fluida y colaborativa. Desde la creación de proyectos hasta la asignación y seguimiento de tareas.'
imageUrl: 'https://s3.minio.hdglabs.com/portfolio/posts/Project%20Management%20System/banner.png'
tags: [Angular,SpringBoot,MySQL,Tailwind,Sass]
degree: 'from-blue-800 to-indigo-900 bg-gradient-to-t'
type: 'FullStack'
date: '2024-06-23'
---

## Enlaces:

- **Link del repositorio FrontEnd Github**: [Repositorio](https://github.com/luishidalgoa/Project_Management_System)
- **Link del repositorio BackEnd Github**: [Repositorio](https://github.com/luishidalgoa/Project_Management_System_Backend)
- **Link de la aplicación**: [FCT_Atmira - Welcome](https://fct-atmira-front.vercel.app/Welcome)

> **Nota**: El BackEnd de la aplicación web está alojado en un hosting gratuito, por lo que es probable que la primera consulta a la API demore al menos 5 minutos.

---

## Introducción

<img jpg src="https://s3.minio.hdglabs.com/portfolio/posts/Project%20Management%20System/Portada.png">

## Propuesta:

El origen de este proyecto nace de una colaboración entre el instituto en el que estaba realizando 2º Grado Superior 'DAM' y la consultora Atmira. El que iba a ser nuestro tutor de prácticas.

## Propósito del proyecto:

El propósito de este proyecto era desarrollar un sistema parecido a Jira o Trello, donde un usuario pudiera registrar el trabajo en una pestaña indicando el proyecto y detallar lo realizado mediante códigos de registro. También debía contar con otra pestaña para incurrir gastos de empresa, como dietas y otros costos, asociados a un proyecto.

## Objetivos:

<h3 tab="1"> Registro Detallado de Tareas por Proyecto:</h3>

<div tab="2">

- Los usuarios pueden agregar tareas asociadas a un flujo de trabajo dentro del proyecto, similar a sistemas de gestión como Jira.
- Posibilidad de agregar subtareas relacionadas con otras tareas dentro de cada proyecto, permitiendo gestionar el flujo de trabajo de manera jerárquica.
- Crear un sistema de identificadores auto-incrementales personalizados, en lugar del clásico autoincremento de la base de datos.
</div>
<h3 tab="1"> Gestión de Gastos de Empresa:</h3>

<div tab="2">

- Los usuarios pueden registrar los gastos incurridos asociados a proyectos específicos (dietas, transporte, etc.).
- Permite agregar información detallada sobre cada gasto, como descripción, fecha y monto gastado.
</div>

<h3 tab="1"> Capa de Seguridad:</h3>

<div tab="2">

- Implementa una capa de seguridad proporcionando tokens de acceso al usuario que inicia sesión.
- Acceso restringido a la API, permitiendo acceder solo desde el mismo puerto del API-Rest.
</div>

---

## Guía de uso:

<img jpg src="https://s3.minio.hdglabs.com/portfolio/posts/Project%20Management%20System/guia_uso.gif">

<h3 tab="1"> 1. Acceso e inicio de sesión:</h3>
<p tab="2">Al acceder a la página de inicio, observarás una pantalla con los botones "Login" y "Sign in". Si no tienes cuenta, selecciona "Sign In", completa el formulario en el modal que se abre.</p>

<h3 tab="1"> 2. Navegación entre paneles: </h3>
<div tab="2">
La aplicación cuenta con una barra de navegación entre los diferentes paneles:

- **Your Work**: Visualiza todas las tareas asignadas dentro de los proyectos.
- **Projects**: Muestra tus proyectos o aquellos en los que colaboras.
- **Expense**: Permite crear un nuevo gasto o dieta asociada a un proyecto, o dirigirte al panel de gastos con un desglose completo de los reportados.

<span style="display:flex;justify-content:center;">
<img style="min-width:100%;" src="https://s3.minio.hdglabs.com/portfolio/posts/Project%20Management%20System/1.png">
</span>
</div>

<h3 tab="1"> 3. Home:</h3>
<div tab="2">
En esta vista puedes observar un desglose de todos los proyectos en los que participas. También puedes editar o borrar proyectos.
<span style="display:flex;justify-content:center;">
<img style="min-width:100%;" src="https://s3.minio.hdglabs.com/portfolio/posts/Project%20Management%20System/2.png">
</span>
</div>

<h3 tab="1"> 4. Vista general de un proyecto:</h3>
<div tab="2">Al acceder a un proyecto, verás las tareas asociadas. Cada tarea puede tener subtareas, y ambas pueden ser asignadas a colaboradores.
<span style="display:flex;justify-content:center;">
<img style="min-width:100%;" style="" src="https://s3.minio.hdglabs.com/portfolio/posts/Project%20Management%20System/3.png">
</span>
</div>


<h3 tab="1"> 5. Edición de tareas y subtareas:</h3>
<div tab="2">Puedes actualizar la información de tareas y subtareas a través del menú desplegable de tres puntos. Cambia el estado, el tipo de tarea o asigna la tarea a otro usuario.
<span style="display:flex;justify-content:center;">
<img style="min-width:100%;" src="https://s3.minio.hdglabs.com/portfolio/posts/Project%20Management%20System/4.png">
</span>
</div>

<h3 tab="1">6. Gestor de gastos de un proyecto:</h3>
<div tab="2">

Dentro de un proyecto, el botón "**_Expensive_**" muestra los gastos creados por colaboradores, para que como administrador del proyecto, decidas si aprobar o denegar el reembolso.
<span style="display:flex;justify-content:center;">
<img style="min-width:100%;" src="https://s3.minio.hdglabs.com/portfolio/posts/Project%20Management%20System/5.png">
</span>
</div>

<h3 tab="1"> 7. Visualización de incidencias de gasto:</h3>

<div tab="2">

En **_Expense -> View all_** podrás visualizar todas las incidencias de gasto generadas por ti, con información sobre el estado de resolución y el proyecto correspondiente.
<span style="display:flex;justify-content:center;">
<img style="min-width:100%;" src="https://s3.minio.hdglabs.com/portfolio/posts/Project%20Management%20System/6.png">
</span>
</div>


---

## Relevancia:

Este proyecto ha requerido conocimientos avanzados tanto de Front-End como de Back-End.

<h3 tab="1"> BackEnd:</h3>
<div tab="2">

- SpringBoot, SpringSecurity para securizar la API.
- Creación de identificadores incrementales personalizados.
- Conocimientos avanzados en Java y SQL.</div>

<h3 tab="1"> FrontEnd:</h3>
<div tab="2">

- Interfaz minimalista e intuitiva.
- Sistema de rutas BreadCrumb para facilitar la navegación.
- Optimización de consultas a la API mediante la reconstrucción de objetos en la memoria local.
</div>

---

## Arquitectura:

<h3 tab="1"> Paso a tablas de E/R:</h3>
<img png size="7" src="https://s3.minio.hdglabs.com/portfolio/posts/Project%20Management%20System/7.png">

<h3 tab="2">Diagrama de flujo: </h3>
<img jpg src="https://s3.minio.hdglabs.com/portfolio/posts/Project%20Management%20System/8.png">

<h3 tab="1"> Requisitos FrontEnd:</h3>

<div tab="2">

- Cada paquete debe disponer de su propio routing y módulos.
- Servicios específicos para proteger las rutas.
- Uso de Lazy Load para cargar rutas.
- Buen scaffolding del proyecto.
- Uso correcto de los ciclos de vida de Angular.
</div>

<h3 tab="1"> Requisitos BackEnd:</h3>

<div tab="2">

- La aplicación servidor es una API-Rest.
- **Api-Controller**: Proxy entre el Front-End y la lógica de Back-End.
- Conexión de la aplicación Spring con MySQL desplegado en la nube.
- **Api-Model**: Creación de DTO.
- Sistema personalizado de identificación de proyectos, tareas y subtareas.
</div>

---

## Plan de desarrollo:

### 🚀 Front-End Development:

**Sprint 1 (Proyectos y Tareas):**
- ✅ Desarrollar interfaces.
- ✅ Servicio Project.
- ✅ Funcionalidades básicas para gestionar proyectos y tareas.
- ✅ Desarrollo de UI.
- ❌ Crear Logs.

**Sprint 2 (Sistema de Colaboradores):**
- ✅ Sistema de inicio de sesión y registro.
- ✅ Asociar proyectos al usuario logueado.
- ✅ Crear subtareas.
- ✅ Visualización correcta de subtareas dentro de tareas.
- ✅ Asignar tareas a colaboradores.
- ❌ Todas las consultas a la API otorgan el token de acceso del usuario.

**Sprint 3 (Subtareas):**
- ✅ Renderización completa de subtareas.
- ❌ Selección múltiple de subtareas en una tarea (Task-Board).
- ✅ 🪲 [BUG] Las subtareas no se renderizan correctamente.
- ❌ Asignación de tareas a usuarios.
- ✅ Despliegue y corrección de bugs.

### 🔧 Back-End Development:

**Sprint 1 (Proyectos y Tareas):**
- ✅ Crear y diseñar base de datos.
- ✅ Crear proyectos.
- ✅ Crear tareas dentro de un proyecto.
- ✅ Funcionalidades básicas: Departamento, Expense, WorkPlace.

**Sprint 2 (Sistema de Colaboradores):**
- ✅ Securización de la API.
- ✅ Renombrar EndPoints.
- ✅ Sistema de inicio de sesión y registro.
- ✅ Asociar proyecto con colaborador.

**Sprint 3 (Subtareas):**
- ✅ 🪲 [BUG] Cambiar consulta en TaskRepository “findSubtaskByParentTaskId()”.
- ✅ 🪲 [BUG] Solucionar Bug en ListTaskById().
- ✅ Funcionalidades de tareas (Asignar, status, etc.).
- ✅ 🪲 [BUG] El método GetTasksByProject debe devolver solo las tareas hijo.
