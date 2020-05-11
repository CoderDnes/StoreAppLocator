var map;
var markers = [];
var infoWindow;
var locationSelect;



function initMap() {
    var losAngeles = {
        lat: 34.063380,
        lng: -118.358080
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: losAngeles,
        zoom: 11,
    });
    ShowStoreMarkers();
}

function ShowStoreMarkers() {
    stores.forEach(function(stores, index) {
        var latlng = new google.maps.LatLng(
            stores.coordinates.latitude,
            stores.coordinates.longitude
        );
        var name = stores.name
        var Address = stores.addressLines[0];
        createmarker(latlng, name, Address);
    })
}

function createmarker(latlng, name, Address) {


}