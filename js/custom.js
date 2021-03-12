// Create viewer
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var scene = urlParams.get('scene')

let pannellumViewer = pannellum.viewer('panorama', {
    "showFullscreenCtrl": true,
    "autoLoad": true,
    "multiResMinHfov":true,
    // "showControls": true,
    "default": {
        "firstScene": scene,
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "pasillo-1": {
            "title": "Pasillo 1",
            "hfov": 110,
            "yaw": 150,
            "type": "equirectangular",
            // "panorama": "./titles/hacienda/pasillo-1/pasillo-1.jpg",
            // "panorama": "./titles/hacienda/pasillo-1/pasillo-1_4x.jpg",
            // "panorama": "./titles/hacienda/pasillo-1/pasillo-1_photos_v2_x4.jpg",
            // "panorama": "./titles/hacienda/pasillo-1/pasillo-1-8x.jpg",
            "panorama": "./titles/hacienda/pasillo-1/pasillo-1-4x-qudratic.jpg",

            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 200,
                    "type": "scene",
                    "text": "Pasillo 2",
                    "sceneId": "pasillo-2",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -3, //arriba - abajo
                    "yaw": 150, // izq - der
                    "cssClass": "custom-hotspot-img custom-img",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "title": "Mapa",
                        "id": "hotspot-mapa",
                        "modal":{
                            "title": "Mapa cuchi",
                            "description": "Un Amplio espacio donde frecuentemente hay eventos de Música de Cámara"
                            // "extra": ""
                        }
                    },
                },
                {
                    "pitch": -8, //arriba - abajo
                    "yaw": 304, // izq - der
                    "cssClass": "custom-hotspot-icon",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "title": "Salon de Concierto",
                        "id": "hotspot-concierto-icon"
                    },
                },
            ]
        },
        "pasillo-2": {
            "title": "Pasillo 2",
            "hfov": 110,
            "yaw": 150,
            "type": "equirectangular",
            "panorama": "./titles/hacienda/pasillo-2.jpg",

            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 205,
                    "type": "scene",
                    "text": "Pasillo 3",
                    "sceneId": "pasillo-3",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 1,
                    "yaw": 40,
                    "type": "scene",
                    "text": "Pasillo 1",
                    "sceneId": "pasillo-1",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
            ]
        },
        "pasillo-3": {
            "title": "Pasillo 3",
            "hfov": 110,
            "yaw": 150,
            "type": "equirectangular",
            "panorama": "./titles/hacienda/pasillo-3.jpg",

            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Pasillo 4",
                    "sceneId": "pasillo-4",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 1,
                    "yaw": -90,
                    "type": "scene",
                    "text": "Pasillo 2",
                    "sceneId": "pasillo-2",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 0, //arriba - abajo
                    "yaw": 0, // izq - der
                    "cssClass": "custom-hotspot-icon latido",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "title": "Sala de Secado 2",
                        "id": "hotspot-galeria-icon",
                        "customIcon": "galeria-arte.svg"
                    },
                    "type": "scene",
                    "sceneId": "sala-2",
                },
            ]
        },
        "sala-2": {
            "title": "Pasillo 2",
            "hfov": 110,
            "yaw": 150,
            "type": "equirectangular",
            "panorama": "./titles/hacienda/sala-2/sala-2_digital_art_x4.jpg",
            // "panorama": "./titles/hacienda/sala-2/sala-2.jpg",

            "hotSpots": [
                {
                    "pitch": -8,
                    "yaw": 200,
                    "type": "scene",
                    "text": "Pasillo 3",
                    "sceneId": "pasillo-3",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -4, //arriba - abajo
                    "yaw": 360, // izq - der
                    "cssClass": "custom-hotspot-icon",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "title": " Caraotas- Jorge Pedro Nuñez",
                        "id": "hotspot-obra-1-sala-2-img",
                        "modal":{
                            "title": "Caraotas- Jorge Pedro Nuñez",
                            "description": "La prática artística de Jorge Pedro Nuñez está ligada a su experiencia como historiador del arte, debido a lo que sus obras aluden a múltiples referencias, tanto artísticas como contextuales",
                            "extra": "<img src=\"./titles/hacienda/sala-2/obras/obra-1.jpg\" alt=\"Obra 1\" class=\"img-modal\" >"
                        }
                    },
                },
                {
                    "pitch": -4, //arriba - abajo
                    "yaw": 110, // izq - der
                    "cssClass": "custom-hotspot-icon",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "title": "NOMBRE OBRA 2",
                        "id": "hotspot-obra-2-sala-2-img"
                    },
                },
                {
                    "pitch": -4, //arriba - abajo
                    "yaw": 230, // izq - der
                    "cssClass": "custom-hotspot-icon",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "title": "NOMBRE OBRA 3",
                        "id": "hotspot-obra-3-sala-2-img"
                    },
                },
            ]
        },
        "pasillo-4": {
            "title": "Pasillo 4",
            "hfov": 110,
            "yaw": 150,
            "type": "equirectangular",
            "panorama": "./titles/hacienda/pasillo-4.png",

            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Pasillo 5",
                    "sceneId": "pasillo-5",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 1,
                    "yaw": -90,
                    "type": "scene",
                    "text": "Pasillo 3",
                    "sceneId": "pasillo-3",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 0, //arriba - abajo
                    "yaw": -4, // izq - der
                    "cssClass": "custom-hotspot-icon latido",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "title": "Sala de Secado 3",
                        "id": "hotspot-galeria-icon"
                    },
                    "type": "scene",
                    "sceneId": "sala-3",
                },
            ]
        },
        "pasillo-5": {
            "title": "Pasillo 5",
            "hfov": 110,
            "yaw": 150,
            "type": "equirectangular",
            "panorama": "./titles/hacienda/pasillo-5.jpg",

            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Pasillo 6",
                    "sceneId": "pasillo-6",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 1,
                    "yaw": -90,
                    "type": "scene",
                    "text": "Pasillo 4",
                    "sceneId": "pasillo-4",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 5, //arriba - abajo
                    "yaw": 0, // izq - der
                    "cssClass": "custom-hotspot-icon latido",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "title": "Tienda de Chocolate",
                        "id": "hotspot-chocolate-icon"
                    },
                    "type": "scene",
                    "sceneId": "tienda-chocolate",
                },
                {
                    "pitch": -7, //arriba - abajo
                    "yaw": 195, // izq - der
                    "cssClass": "custom-hotspot-img custom-img",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "title": "Mapa",
                        "id": "hotspot-mapa"
                    },
                },
            ]
        },
        "tienda-chocolate": {
            "title": "Tienda de Chocolate",
            "hfov": 110,
            "yaw": 150,
            "type": "equirectangular",
            "panorama": "./titles/hacienda/cacao/cacao_photos_v2_faces_x4_toned.jpg",

            "hotSpots": [
                {
                    "pitch": -3,
                    "yaw": -15,
                    "type": "scene",
                    "text": "Pasillo 5",
                    "sceneId": "pasillo-5",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
            ]
        },
        "pasillo-6": {
            "title": "Pasillo 6",
            "hfov": 110,
            "yaw": 150,
            "type": "equirectangular",
            "panorama": "./titles/hacienda/pasillo-6.jpg",

            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 90,
                    "type": "scene",
                    "text": "Pasillo 7",
                    "sceneId": "pasillo-7",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 1,
                    "yaw": -90,
                    "type": "scene",
                    "text": "Pasillo 5",
                    "sceneId": "pasillo-5",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 0, //arriba - abajo
                    "yaw":110, // izq - der
                    "cssClass": "custom-hotspot-icon latido",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "title": "Sala de Curso de Fotografia",
                        "id": "hotspot-camara-icon"
                    },
                    "type": "scene",
                    "sceneId": "sala-fotografia",
                },
            ]
        },
        "sala-fotografia": {
            "title": "Sala de Curso Fotografia",
            "hfov": 110,
            "yaw": 150,
            "type": "equirectangular",
            "panorama": "./titles/hacienda/fotoclase.jpg",

            "hotSpots": [
                {
                    "pitch": -3,
                    "yaw": 290,
                    "type": "scene",
                    "text": "Pasillo 6",
                    "sceneId": "pasillo-6",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
            ]
        },
        "pasillo-7": {
            "title": "Pasillo 7",
            "hfov": 110,
            "yaw": 150,
            "type": "equirectangular",
            "panorama": "./titles/hacienda/pasillo-final.jpg",

            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": -90,
                    "type": "scene",
                    "text": "Pasillo 6",
                    "sceneId": "pasillo-6",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 0, //arriba - abajo
                    "yaw":210, // izq - der
                    "cssClass": "custom-hotspot-icon latido",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "title": "Sala de Curso de Fotografia",
                        "id": "hotspot-camara-icon"
                    },
                    "type": "scene",
                    "sceneId": "sala-fotografia",
                },
            ]
        },
    }
});

pannellumViewer.on('load',
    function () {
        setTimeout(loadHotspot, 500);
    }
);


// Hot spot creation function
function hotspot(hotSpotDiv, args) {
    // Custom class
    hotSpotDiv.classList.add('custom-tooltip');
    // Custom ID
    hotSpotDiv.id = args.id;

    // Event modal
    if (args.modal){
        $(`#${args.id}`).click( function() {
            openModal(args.modal)
        })

    }

    console.log(`Cargando Hotspot ${args.title}` );


    // Create span element to tooltip
    var span = document.createElement('span');
    span.innerHTML = args.title;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';

    // Custom icon
    if(args.customIcon){
        $(`#${args.id}`).append(`<img src="images/${args.customIcon}" alt="Galeria" width="50" height="50">`)
    }

}


// ZONA DE EXPERIMENTACION

// CARGAR LOS MODALES

// Funcion para cargar los modales
let loadHotspot = () => {
    // Verifica que ya cargo el viewer
    if (pannellumViewer.isLoaded()) {

        // $("#a").click(function () {
        //     $('#myModal').modal('toggle');
        // });
        // $("#hotspot-concierto-icon").click(function () {
        //     $('#myModal').modal('toggle');
        // });



        $('#hotspot-chocolate-icon').append('<img src="images/chocolate.svg" alt="Chocolate" width="50" height="50">')
        // $('#hotspot-galeria-icon').append('<img src="images/galeria-arte.svg" alt="Galeria" width="50" height="50">')
        $('#hotspot-camara-icon').append('<img src="images/camara.svg" alt="Camara"  width="50" height="50">')


    }
    else {
        setTimeout(loadHotspot, 500);
    }
}


/*
 * openModal
 * 
 * Prepara la info que se va a mostrar en el Modal
 */
let openModal = (data) => {
    // Search modal
    let modal = $('#modal-info')

    // Search info modal
    let title = modal.find('#modal-title')
    let description = modal.find('#modal-description')
    let extra = modal.find('#modal-extra')

    // Set info
    title.text(data.title)
    description.text(data.description)
    // Set html tag
    extra.html(data.extra)

    // Open modal
    modal.modal('show');
}

