define('jquery', function () {
    'use strict'
    console.log("Shirt manager loaded!");
    return {
        logTheShirt: function () {
            console.log("logTheShirt");
        },
        putOnShirt: function () {
            console.log("putOnShirt");
        },
        displayValue: function (val) {
            console.log("Passed value: " + val);
        }
    };
});