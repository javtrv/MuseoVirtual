
# Documentacion Museo Virtual

## Introduccion

El proyecto de Museo Virtual se establecio como idea del miniproyecto de desarrollo de software de la profesora Yudith Cardinale de la Universidad Símon 
Bolívar, en el trimestre Enero-Marzo 2021.

La idea principal es crear un tour virtual de 3 museos de la ciudad Arequipa, Peru. 
Para la presentacion beta de este miniproyecto se usaron datos e imagenes de la Hacienda La Trinidad, ubicada en la ciudad de Miranda, Venezuela.

## Integrantes

Alvaro Avila
David Rodriguez 
Javier Medina
Maria Fernanda Machado

## Herramientas

Se realizo un proceso investigativo para definir cual iba a ser la herramienta que nos iba a permitir construir el tour virtual.
Llegamos a 2 opciones viables, Marzipano y Panellum. Al final dada su facilidad de modificación y de poder exportar el proyecto. Nos quedamos con la herramienta de uso publico Panellum.

https://pannellum.org/


## Escenas

Para ver la documentacion de como se arman las esceneas ir a la documentacion oficial de [Pannellum](https://pannellum.org/documentation/reference/).

## Documentacion HotSpot

* **createTooltipFunc** (function):
    Recibe una funcion para generar el hotspot
    
    Funciones disponibles:
    * hotspot

* **createTooltipArgs** (object):
    * **title** (string): Titulo del hotspot
    * **id** (string): id HTML
    * **customIcon** (string): nombre del icono almacenado en la carpeta "images"
    * **modal** (object): Permite mostrar un Modal con informacion al darle click al hotspot
        * **title** (string): Titulo del modal
        * **description** (string): Texto o descripcion del modal
        * **image** (object): Imagen
            * **src**: Ruta de la imagen
            * **alt**: Alternate text 
            * **class**: extra class para la imagen
        * **extra** (string): Codigo HTML para insertar al final del modal

**NOTA:** Todas las imagenes deben estar en la carpeta "images", de lo contrario no reconocera la imagen.

## Ejemplo

```json
"hotSpots": [
    {
        "pitch": -4, // Orientacion Vertical
        "yaw": 20, // Orientacion Horizontal
        "cssClass": "custom-hotspot-icon", // Clase HTML
        "createTooltipFunc": hotspot, // Funcion de creacion del Tooltip
        "createTooltipArgs": { // Argumentos para la funcion
            "title": "Titulo", // Titulo del tooltip
            "id": "hotspot-1", // ID
            "modal":{ // Activar modal cuando se hace click
                "title": "Obra 1", // Titulo modal
                "description": "Un Amplio espacio donde frecuentemente hay eventos de Música de Cámara", // Texto
                "imagen": { //Imagen 
                    "src": "obra.jpg"
                }
            }
        }
    }
]
```

