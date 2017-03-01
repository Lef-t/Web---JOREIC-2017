$(function () {

    function initMap() {

        var location = new google.maps.LatLng(-32.495702, -58.229611);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 18,
            panControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

         var markerImage = 'img/marker.png';

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: markerImage
        });

        var contentString = '<div class="info-window">' +
                '<h3>UTN - FRCU</h3>' +
                '<div class="info-content">' +
                '<p>Universidad Tecnológica Nacional, Facultad Regional de Concepción del Uruguay. Sede de la filial ANEIC CdelU</p>' +
                '</div>' +
                '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 400
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });

    }

    google.maps.event.addDomListener(window, 'load', initMap);
});