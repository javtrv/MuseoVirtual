// Create viewer
let pannellumViewer = pannellum.viewer('panorama', {
    "showFullscreenCtrl": true,
    "autoLoad": true,
    "multiResMinHfov":true,
    // "showControls": true,
    "default": {
        "firstScene": "sala-2",
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
            "panorama": "./titles/hacienda/pasillo-1/pasillo-1_photos_v2_x4.jpg",
            // "panorama": "./titles/hacienda/pasillo-1/pasillo-1-8x.jpg",
            // "panorama": "./titles/hacienda/pasillo-1/pasillo-1-4x-qudratic.jpg",

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
                        "id": "hotspot-mapa"
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
                    "pitch": 0, //arriba - abajo
                    "yaw": 0, // izq - der
                    "cssClass": "custom-hotspot-icon",
                    "createTooltipFunc": hotspot,
                    "createTooltipArgs": {
                        "title": "Sala de Secado 2",
                        "id": "hotspot-galeria-icon"
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
                        "title": "NOMBRE OBRA 1",
                        "id": "hotspot-obra-1-sala-2-img"
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
