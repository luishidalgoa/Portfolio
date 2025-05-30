---
title: 'DeUser, Microsoft Power Platform, Creación e Impresion de Etiquetas'
articleUrl: 'DeUser_Practicas_PowerPlatform'
description: 'En este artículo, hablo sobre la aplicación que desarrolle durante mi periodo de prácticas en DeUser, Realice una aplicacion que automatizaba la creación e impresión de etiquetas para productos, utilizando Microsoft Power Platform.'
imageUrl: 'https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fbanner.jpg&version_id=null'
tags: [Power Apps, Power Automate, Microsoft Lists, Sharepoint]
degree: 'bg-gradient-to-tl to-pink-500 from-blue-500'
type: 'Full Stack'
date: '2025-03-24'
visible: false
---

# Introduccion

Esta aplicación tiene como objetivo darles herramientas ofimáticas a los
encargados de generar etiquetas para los productos e instrumentos de los
almacenes de la empresa, de una forma más rápida y sencilla.

A continuación, vamos a explicar paso a paso la aplicación, simulando la
creación de una nueva etiqueta.

# Pantallas de la aplicación

En la aplicación tenemos dos tipos de pantallas.

## Plantillas

En ella el usuario podrá seleccionar la plantilla sobre la que
trabajará.

<figure>
<img jpg size="7" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen1.png&version_id=null" />
<figcaption><p>Imagen 1. Pantalla "Plantillas"</p></figcaption>
</figure>

### Listado de plantillas

- **Calibración**:

<figure>
<img jpg size="6" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen2.png&version_id=null"/>
<figcaption><p>Imagen 2. Etiqueta calibración</p></figcaption>
</figure>

Esta plantilla incluye los siguientes campos:

1.  **Identificación**: nombre de la herramienta  

2.  **Nº registro**: siglas identificativas asignadas a la herramienta
    por Deuser.

3.  **Fecha cal**: Fecha de la última calibración que se le hizo a la
    herramienta.

4.  **Prox cal**: Fecha que debe realizarse la nueva calibración de la
    herramienta.

- **Equipo segregado**:

<figure>
<img jpg size="5" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen3.png&version_id=null"/>
<figcaption><p>Imagen 3. Etiqueta equipo segregado</p></figcaption>
</figure>

Esta plantilla incluye los siguientes campos:

1.  **Nº Serie**: Número de serie de la herramienta o número de serie
    del producto recibido (Etiqueta de producto no conforme)

2.  **Instrumeto**: Nombre del instrumento a inspeccionar. Se puede
    incluir el nº de registro si fuese necesario

3.  **Defecto**: Si la herramienta presenta alguna incidencia o defecto
    deberemos de indicarlo en este campo.

4.  **Nº Informe**: Nº del informe de la herramienta que indica que no
    se encuentra capacitada para realizar su función.

5.  **Resp. Instrumentación**: Dueño de la herramienta

6.  **Fecha**: es el campo de última revisión del instrumento,  

- **Calibración con alguna anomalía**

<figure>
<img jpg size="5" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen4.png&version_id=null"/>
<figcaption><p>Imagen 4. Etiqueta calibracion con alguna
anomalia</p></figcaption>
</figure>

Esta plantilla incluye los siguientes campos:

1.  **Instrumento**: Nombre del instrumento a inspeccionar. Se puede
    incluir el nº de registro si fuese necesario

2.  **Identificación**: nombre de la herramienta  

3.  **Fecha cal**: Fecha de la última calibración que se le hizo a la
    herramienta. Además, es la fecha en la que se recepciona un material

4.  **Registro**: siglas identificativas asignadas a la herramienta por
    Deuser.

5.  **Prox cal**: Fecha que debe realizarse la nueva calibración de la
    herramienta.

6.  **Observaciones**: información adicional acerca del articulo

- **Equipo de uso restringido:**

<figure>
<img jpg size="5" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen5.png&version_id=null"/>
<figcaption><p>Imagen 5. Etiqueta equipo de uso
restringido</p></figcaption>
</figure>

Esta plantilla incluye los siguientes campos:

1.  **Nº Serie**: Número de serie de la herramienta o número de serie
    del producto recibido (Etiqueta de producto no conforme)

2.  **Instrumeto**: Nombre del instrumento a inspeccionar. Se puede
    incluir el nº de registro si fuese necesario

3.  **Defecto**: Si la herramienta presenta alguna incidencia o defecto
    deberemos de indicarlo en este campo.

4.  **Nº certificado**: Nº del certificado donde se indica que la
    herramienta queda para un uso restringido

5.  **Resp. Instrumentación**: Dueño de la herramienta

6.  Fecha

- **Vida limitada**:

<figure>
<img jpg size="6" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen6.png&version_id=null"/>
<figcaption><p>Imagen 6. Etiqueta vida limitada</p></figcaption>
</figure>

Esta plantilla incluye los siguientes campos:

1.  **Artículo**: Nombre del elemento que se ha recepcionado/
    inspeccionado  

2.  **Fecha**: es el campo de última revisión del instrumento,  

3.  **Sello/Firma**: Se incluirán las iniciales de la persona que ha
    cumplimentado la etiqueta

- **Producto no conforme**:

<figure>
<img jpg size="4" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen7.png&version_id=null" />
<figcaption><p>Imagen 7. Etiqueta de producto no
conforme</p></figcaption>
</figure>

Esta plantilla incluye los siguientes campos:

1.  **Artículo**: Nombre del elemento que se ha recepcionado/
    inspeccionado  

2.  **Proyecto**: Se incluirá el número y nombre del proyecto al que va
    asociado el material recepcionado

3.  **Cantidad**: Número de unidades que se han recepcionado

4.  **Lote**: número asociado al artículo referente a la partida de
    producción o fabricación por parte del propio fabricante.

5.  **Nº serie**: Número de serie de la herramienta o número de serie
    del producto recibido (Etiqueta de producto no conforme)

6.  **Fecha**: es el campo de última revisión del instrumento,  

7.  **Sello/Firma**: Se incluirán las iniciales de la persona que ha
    cumplimentado la etiqueta

8.  **Observaciones**: información adicional acerca del articulo

- **Producto segregado**:

<figure>
<img jpg size="4" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen8.png&version_id=null" />
<figcaption><p>Imagen 8. Etiqueta de producto segregado</p></figcaption>
</figure>

Esta plantilla incluye los siguientes campos:

1.  **Artículo**: Nombre del elemento que se ha recepcionado/
    inspeccionado  

2.  **Proyecto**: Se incluirá el número y nombre del proyecto al que va
    asociado el material recepcionado

3.  **Cantidad**: Número de unidades que se han recepcionado

4.  **Lote**: número asociado al artículo referente a la partida de
    producción o fabricación por parte del propio fabricante.

5.  **Nº serie**: Número de serie de la herramienta o número de serie
    del producto recibido (Etiqueta de producto no conforme)

6.  **Fecha**: es el campo de última revisión del instrumento,  

7.  **Sello/Firma**: Se incluirán las iniciales de la persona que ha
    cumplimentado la etiqueta

8.  **Observaciones**: información adicional acerca del articulo

## Crear

En ella, el usuario rellenará un formulario, el cual está asociado con
la etiqueta que se imprimirá. Lo que rellene en él se verá reflejado en
la etiqueta final.

También tiene acceso directo a un historial de etiquetas.

<figure>
<img jpg size="7" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen9.png&version_id=null" />
<figcaption><p>Imagen 9. Vista general de la pantalla
crear</p></figcaption>
</figure>

Pasaremos a explicar el funcionamiento de estas pantallas más
detalladamente.

## Pantalla principal

Cuando accedas a la aplicación, lo primero que verás será una pantalla
con varias plantillas. Cada plantilla está pensada para distintos casos
de uso. Vas a escoger la que necesites

En el caso del ejemplo, usaremos la de **Calibración anómalo**.

Para acceder a la plantilla pulsamos sobre "Usar".

<figure>
<img jpg size="7" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen10.png&version_id=null"/>
<figcaption><p>Imagen 10. Seleccionar plantilla</p></figcaption>
</figure>

## Rellenar formulario

Después de escoger la plantilla, nos redirigirá a la pantalla de
"Crear". En esta pantalla, el encargado se encargará de darle forma a la
etiqueta rellenando un pequeño formulario con los datos que se
representarán en la futura etiqueta.

En todos los formularios encontrarás campos como "**Plantilla**" o
"**Repeticiones**".

<figure>
<img jpg size="7" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen11.png&version_id=null" />
<figcaption><p>Imagen 11. Configurar la plantilla</p></figcaption>
</figure>

### ¿Qué es el campo Plantilla?

Este campo representa el nombre de la plantilla seleccionada. Además,
desde este puedes seleccionar el nombre de la plantilla que deseas de
forma rápida, pero sin tener una vista previa al momento de seleccionar.

### ¿Qué son las repeticiones?

Las repeticiones son el número de veces que la etiqueta se va a repetir
sobre un mismo folio.

## Vaciar formulario

Si deseas vaciar el formulario para crear una nueva etiqueta desde 0,
pulsa en el siguiente botón. Tras pulsar, se restablecerá el formulario,
vaciándose todos los campos.

<figure>
<img jpg size="5" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen12.png&version_id=null" />
<figcaption><p>Imagen 12. Botón para restablecer el
formulario</p></figcaption>
</figure>

## Previsualizar la plantilla

Antes de hacer la impresión, debemos pulsar el botón "Previsualizar"
debajo del formulario. Este botón nos redirigirá a una pantalla donde
veremos el resultado de la hipotética impresión.

<figure>
<img jpg size="6" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen13.png&version_id=null" />
<figcaption><p>Imagen 13. Botón
previsualizar</p></figcaption>
</figure>

<figure>
<img jpg size="7" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen14.png&version_id=null" />
<figcaption><p>Imagen 14. Vista previa de
etiquetas</p></figcaption>
</figure>

## Imprimir la etiqueta

Una vez previsualizado la vista previa de la etiqueta pulsaremos en el
botón "Imprimir" de la parte superior de la pantalla. Esto nos abrirá
una ventana emergente donde pulsaremos de nuevo en Imprimir.

<figure>
<img jpg size="6" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen15.png&version_id=null" />
<figcaption><p>Imagen 15. Botón imprimir</p></figcaption>
</figure>

<figure>
<img jpg size="6" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen16.png&version_id=null" />
<figcaption><p>Imagen 16. Pestaña emergente previa a
impresión</p></figcaption>
</figure>

Se nos iniciará otra pestaña que generará un PDF listo para enviarlo a
la impresora cuando el encargado pulse el botón "Imprimir" nuevamente.

<figure>
<img jpg size="7" size="" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen17.png&version_id=null" />
<figcaption><p>Imagen 17. Generar pdf</p></figcaption>
</figure>

## Historial de etiquetas

El historial es una funcionalidad incluida en la aplicación. Pulsando el
siguiente botón dentro de la pantalla "Crear", se abre un elemento
emergente a la derecha de la pantalla con todos los elementos creados
por el usuario en el pasado.

<figure>
<img jpg size="6" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen18.png&version_id=null"/>
<figcaption><p>Imagen 18. Botón de historial</p></figcaption>
</figure>

<figure>
<img jpg size="6" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen19.png&version_id=null"/>
<figcaption><p>Imagen 19. Vista general del historial</p></figcaption>
</figure>

### Seleccionar elemento del historial

<figure>
<img jpg size="5" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen20.png&version_id=null"/>
<figcaption><p>Imagen 20. Elemento historico</p></figcaption>
</figure>



### Agregar un nuevo registro o Actualizar elemento del histórico de la etiqueta

En la aplicación el usuario podrá crear un nuevo registro en el
histórico, sin embargo las siguientes sub-secciones son importantes
leerlas ya que, según el estado del formulario, el botón que permite la
acción de crear o actualizar un nuevo registro, podría tener distinto
comportamiento.

#### Nuevo registro

Si deseas crear un nuevo registro, deberás tener el formulario limpio,
para ello se recomienda seguir los pasos mencionados en [#Vaciar
formulario](#vaciar-formulario). Una vez limpio el formulario. El botón
se mostrará con este nombre: "Guardar nuevo registro". Ya solo faltaría
rellenar el formulario con nuevos datos y pulsar el siguiente botón.

<figure>
<img jpg size="5" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen21.png&version_id=null" />
<figcaption><p>Imagen 21. Como deberia verse el botón</p></figcaption>
</figure>


##### Ventana emergente

Tras pulsar en el botón de "Guardar nuevo registro" se abre la siguiente
pantalla emergente, avisando de que se enviará un correo electrónico
notificando que se ha creado el nuevo registro y algunos de sus datos.

<figure>
<img jpg size="6" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen22.png&version_id=null" />
<figcaption><p>Imagen 22. vista de la ventana
emergente</p></figcaption>
</figure>

##### Correo electronico

La siguiente imagen es un ejemplo de correo electrónico

<figure>
<img jpg size="6" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen23.png&version_id=null" />
<figcaption><p>Imagen 23. Ejemplo de plantilla de respuesta del correo
electronico</p></figcaption>
</figure>

#### Actualizar

Si seleccionas en el historial el registro de etiqueta que deseas
actualizar, el comportamiento del botón cambiará y se titulará:
"Actualizar registro"

<figure>
<img jpg size="7" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen24.png&version_id=null" />
<figcaption><p>Imagen 24. Selección de un registro para
actualizarlo</p></figcaption>
</figure>

<figure>
<img jpg size="6" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen25.png&version_id=null"/>
<figcaption><p>Imagen 25. Como se debería ver el botón de
actualizar</p></figcaption>
</figure>

### Eliminar elemento del historial

Para eliminar un elemento del historial pulsa el botón de la papelera,
automáticamente se eliminará de la lista el registro seleccionado.

<figure>
<img jpg size="5" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen26.png&version_id=null" />
<figcaption><p>Imagen 26. Botón eliminar historico</p></figcaption>
</figure>

## Vaciar los campos del formulario

En la aplicación, al lado de los botones "Previsualizar" y "Guardar",
hay un ícono de un papel. Al pulsar sobre este, podrás limpiar todos los
campos del formulario.

<figure>
<img jpg size="5" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen27.png&version_id=null"/>
<figcaption><p>Imagen 27. Botón limpiar formulario</p></figcaption>
</figure>

##  Pantalla Productos

Los productos representan los artículos para los que la etiqueta vida
limitada estará destinada.

Estos productos tendrán valores únicamente propios que lo definen. Por
ejemplo, un producto o artículo tendrán una duración mínima hasta que
caduquen (el tiempo de caducidad), conocer esa duración ayudará a la
aplicación a calcular automáticamente la fecha de caducidad
predeterminada.

<figure>
<img jpg size="7" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen28.png&version_id=null"/>
<figcaption><p>Imagen 28. Vista general de la
pantalla</p></figcaption>
</figure>

### Creación de un nuevo producto

En la parte del formulario, vamos a rellenar los siguientes campos:

- el nombre del artículo: este nombre no podrá ser uno ya existente.

- el tiempo de duración hasta que caduque el producto. El campo
  **Caducidad** e utiliza para definir el tiempo de vigencia de un
  artículo antes de que caduque. Este valor se ingresa en **formato
  decimal**, representando **años**.

#### Campo tiempo de caducidad

**Formato del campo**

- Se acepta un **número decimal**.

- **1.0** significa **1 año**.

- **0.5** significa **6 meses**.

- **1.2** significa **1 año y 2,4 meses** (1.2 \* 12 = 14.4 meses).

> Nota: Este valor será convertido automáticamente a meses en el cálculo de la fecha de caducidad.

------------------------------------------------------------------------

**Ejemplo de cálculo**

Si el usuario ingresa:

- duración = 1.5

- El sistema lo interpreta como 1.5 \* 12 = 18 meses.

#### Crear producto

Para crear un producto nuevo, deberemos pulsar antes el botón "Nuevo".
Una vez el formulario esté completamente limpio, veremos en la caja de
botones la opción "Crear producto". Tras rellenar el formulario,
pulsamos el botón. Esta acción mostrará una ventana emergente de
confirmación.

<figure>
<img jpg size="5" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen29.png&version_id=null"/>
<figcaption><p>Imagen 29. Botón
Nuevo</p></figcaption>
</figure>

<figure>
<img jpg size="6" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen30.png&version_id=null"/>
<figcaption><p>Imagen 30. Botón
crear</p></figcaption>
</figure>

<figure>
<img jpg size="5" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen31.png&version_id=null"/>
<figcaption><p>Imagen 31. ventana
emergente</p></figcaption>
</figure>

#### Actualizar

Si seleccionamos un elemento de la lista de productos, podremos
modificar automáticamente sus parámetros. Veremos cómo el botón
principal de la caja de botones se titulará "Actualizar producto". Tras
pulsarlo, se mostrará una ventana emergente de confirmación antes de
actualizar definitivamente el producto.

<figure>
<img jpg size="6" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen32.png&version_id=null"/>
<figcaption><p>Imagen 32. Botón Actualizar y lista de
productos</p></figcaption>
</figure>

### Eliminación producto

En el bloque en el que se listan todos los productos de la lista,
pulsaremos en el botón de la papelera, esto eliminará el producto
seleccionado.

<figure>
<img jpg size="6" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen33.png&version_id=null" />
<figcaption><p>Imagen 33. Botón eliminacion producto</p></figcaption>
</figure>

### Refrescar lista

Si por algún error del programa no se ha actualizado automáticamente la
lista al crear o eliminar un producto, tenemos la opción de forzar la
actualización de la Lista en cuestión. Para ello pulsa en el botón
"Refrescar" en la parte superior derecha. Esto forzará su actualización

<figure>
<img jpg size="6" src="https://minio.luishidalgoa.ddns-ip.net/api/v1/buckets/portfolio/objects/download?preview=true&prefix=posts%2FDeUser_Practicas_PowerPlatform%2Fscreenshots%2FImagen34.png&version_id=null" />
<figcaption><p>Imagen 34. Botón refrescar la lista de
productos</p></figcaption>
</figure>