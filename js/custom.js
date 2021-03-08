// Create viewer
let pannellumViewer = pannellum.viewer('panorama', {
    "showFullscreenCtrl": true,
    "autoLoad": true,
    // "showControls": true,
    "default": {
        "firstScene": "quinta",
        "sceneFadeDuration": 1000
    },

    "scenes": {
        "primera": {
            "title": "Entrada",
            "hfov": 110,
            "pitch": 0,
            "yaw": 300,
            "type": "equirectangular",
            "panorama": "./titles/photo_2021-03-02_23-20-24.jpg",
            "hotSpots": [
                {
                    "pitch": 0,
                    "yaw": 230,
                    "type": "scene",
                    "text": "Jardin",
                    "sceneId": "segunda",
                },
                {
                    "pitch": -3, //arriba - abajo
                    "yaw": 304, // izq - der
                    "cssClass": "custom-hotspot claseEjemplo",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "title": "Salon de Concierto",
                        "id": "a"
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
        "segunda": {
            "title": "Jardin",
            "hfov": 110,
            "yaw": 260,
            "type": "equirectangular",
            "panorama": "./titles/photo_2021-03-02_23-20-00.jpg",
            "hotSpots": [
                {
                    "pitch": -0.6,
                    "yaw": 310,
                    "type": "scene",
                    "text": "Pasillo",
                    "sceneId": "tercera",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -0.6,
                    "yaw": 180,
                    "type": "scene",
                    "text": "Inicio",
                    "sceneId": "primera",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": 7, //arriba - abajo
                    "yaw": 250, // izq - der
                    "cssClass": "custom-hotspot-icon",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "title": "Galeria de Arte",
                        "id": "hotspot-galeria-icon"
                    },
                },
                {
                    "pitch": 10, //arriba - abajo
                    "yaw": 32, // izq - der
                    "cssClass": "custom-hotspot-icon",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "title": "Agujero negro al inframundo o al mas alla",
                        "id": "hotspot-blackhole-icon"
                    },
                },
            ]
        },
        "tercera": {
            "title": "Pasillo",
            "hfov": 110,
            "yaw": 5,
            "type": "equirectangular",
            "panorama": "./titles/photo_2021-03-02_23-20-06.jpg",
            "hotSpots": [
                {
                    "pitch": -5,
                    "yaw": 3,
                    "type": "scene",
                    "text": "Final",
                    "sceneId": "cuarta",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -5,
                    "yaw": 175,
                    "type": "scene",
                    "text": "Jardin",
                    "sceneId": "segunda",
                    "targetYaw": -23,
                    "targetPitch": 2
                }
            ]
        },
        "cuarta": {
            "title": "Final",
            "hfov": 110,
            "yaw": 150,
            "type": "equirectangular",
            "panorama": "./titles/photo_2021-03-02_23-20-08.jpg",
            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 175,
                    "type": "scene",
                    "text": "Pasillo",
                    "sceneId": "tercera",
                    "targetYaw": -23,
                    "targetPitch": 2
                },
                {
                    "pitch": -3, //arriba - abajo
                    "yaw": 350, // izq - der
                    "cssClass": "custom-hotspot-img custom-img",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "title": "La Gioconda",
                        "id": "hotspot-monalisa"
                    },
                },
                {
                    "pitch": -25, //arriba - abajo
                    "yaw": 175, // izq - der
                    "cssClass": "custom-hotspot-icon",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "title": "Zapatos de David pero sin David",
                        "id": "hotspot-zapato-icon"
                    },
                },
            ]
        },
        "quinta": {
            "title": "Pasillo 1",
            "hfov": 110,
            "yaw": 150,
            "type": "equirectangular",
            // "panorama": "./titles/hacienda/pasillo-1/pasillo-1.jpg",
            // "panorama": "./titles/hacienda/pasillo-1/pasillo-1_4x.jpg",
            "panorama": "./titles/hacienda/pasillo-1/pasillo-1_photos_v2_x4.jpg",
            // "panorama": "./titles/hacienda/pasillo-1/pasillo-1-8x.jpg",
            // "panorama": "./titles/hacienda/pasillo-1/pasillo-1-4x-qudratic.jpg",

            "hotSpots": [
                {
                    "pitch": 1,
                    "yaw": 175,
                    "type": "scene",
                    "text": "Pasillo 1",
                    "sceneId": "sexta",
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
                        "id": "hotspot-mapa"
                    },
                },
            ]
        }
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

    // Create span element to tooltip
    var span = document.createElement('span');
    span.innerHTML = args.title;
    hotSpotDiv.appendChild(span);
    span.style.width = span.scrollWidth - 20 + 'px';
    span.style.marginLeft = -(span.scrollWidth - hotSpotDiv.offsetWidth) / 2 + 'px';
    span.style.marginTop = -span.scrollHeight - 12 + 'px';
}


// ZONA DE EXPERIMENTACION

// CARGAR LOS MODALES

// Funcion para cargar los modales
let loadHotspot = () => {
    console.log('cargando')
    // Verifica que ya cargo el viewer
    if (pannellumViewer.isLoaded()) {

        $("#a").click(function () {
            $('#myModal').modal('toggle');
        });
        $("#hotspot-concierto-icon").click(function () {
            $('#myModal').modal('toggle');
        });
        $('#hotspot-concierto-icon').append('<img src="images/micro.svg" alt="Concierto" width="20" height="20">')
        $('#hotspot-blackhole-icon').append('<img src="images/blackhole.svg" alt="Blackhole">')


        $('#a').append('<i class="fas fa-music"></i>')

        $("#hotspot-monalisa").click(function () {
            $('#modal-monalisa').modal('toggle');
        });
    }
    else {
        setTimeout(loadHotspot, 500);
    }
}

// Esperar 0.5seg para ejecutar los eventos
// setTimeout(loadHotspot, 500);


// new Glide('.glide').mount()
