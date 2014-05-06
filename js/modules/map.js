define(["leaflet", "controlgeocoder"], function (L) {
//    Leaflet.noConflict();
    var map = L.map('map').setView([53.34, -6.50], 8);

    // add an OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // add a marker in the given location, attach some popup content to it and open the popup
    var marker = L.marker([53.34, -6.50]).addTo(map)
        .bindPopup('Here we are!')
        .openPopup();

    return {
        displayCountry: function (country) {
            console.log("Passed value code " + country);
            var geocoder = L.Control.Geocoder.nominatim(),
                marker;
            console.log("Geocoder " + geocoder);
            geocoder.geocode(country, function (results) {
                console.log("Geocoder callback!" + results);
                var r = results[0];
                if (r) {
                    map.setView(r.center, 6);
                    marker = L.marker(r.center).addTo(map)
                        .bindPopup(country).openPopup();
                }
            });
            console.log("geocoder" + geocoder);
        }
    };
});