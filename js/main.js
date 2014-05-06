require.config({
    baseUrl: 'js/modules',
    paths: {
//        jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min',
//        leaflet: "//cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.2/leaflet",
//        html5shiv: "//oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv",
        jquery: "external/jquery.min",
        leaflet: "external/leaflet",
        html5shiv: "external/html5shiv",
        respond: "external/respond.min",
        bootstrap: "external/bootstrap.min",
        jvectormap: "external/jquery-jvectormap-1.2.2.min",
//        jvectormapeurope: "external/jquery-jvectormap-europe-mill-en",
        controlgeocoder: "external/Control.Geocoder"
    },
    shim: {
//        jvectormapeurope: ['jquery'],
        jvectormap: ['jquery'],
        bootstrap: ['jquery']
    }
});


//
//require(['jvectormapeurope'], function (jquery) {
//    'use strict';
//});
//

//var shirtmanager = require(['shirtmanager'], function () {
//    'use strict';
//});

define(function (require) {
    'use strict';

    var carousel = require(['carousel'], function (jquery, bootstrap) {
        }),
        tile = require('tile'),
        leafletMapManager = require('map'),
//        shirtmanager = require('shirtmanager'),
        jvectormapwrapper = require('jvectormapwrapper');

    var callback = function (country) {
//        shirtmanager.displayValue(country);
        console.log("label = " + country);

        leafletMapManager.displayCountry(country);
    }

    jvectormapwrapper.initMap(callback);

});