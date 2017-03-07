$(function () {

    function initMap() {

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: {lat: -32.482596, lng: -58.233491},
            zoom: 15,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var markerImage = 'img/marker.png';

//Marker: UTN FRCU
        var marker = new google.maps.Marker({
            position: {lat: -32.495702, lng: -58.229611},
            map: map,
            icon: markerImage,
            title: "UTN-FRCU"
        });
        var contentString = '<div class="info-window">' +
                '<h3>UTN - FRCU</h3>' +
                '<div class="info-content">' +
                '<p>Universidad Tecnológica Nacional, Facultad Regional de Concepción del Uruguay.</p>' +
                '</div>' +
                '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });
        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

//Marker: Auditorio
        var auditorio = new google.maps.Marker({
            position: {lat: -32.482596, lng: -58.233491},
            map: map,
            icon: markerImage,
            title: "Auditorio"
        });
        var contentString = '<div class="info-window">' +
                '<h3>Auditorio</h3>' +
                '<div class="info-content">' +
                '<p>Auditorio Municipal Carlos M. Scelzi.</p>' +
                '</div>' +
                '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });
        auditorio.addListener('click', function () {
            infowindow.open(map, auditorio);
        }); 

//Marker: Terminal
        var terminal = new google.maps.Marker({
            position: {lat: -32.485328, lng: -58.242022},
            map: map,
            icon: markerImage,
            title: "Terminal de Omnibus"
        });
        var contentString = '<div class="info-window">' +
                '<h3>Terminal</h3>' +
                '<div class="info-content">' +
                '<p>Terminal de Omnibus de Concepción del Uruguay.</p>' +
                '</div>' +
                '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });
        terminal.addListener('click', function () {
            infowindow.open(map, terminal);
        }); 

    }

    google.maps.event.addDomListener(window, 'load', initMap);
});