var app = angular.module('weather', ["leaflet-directive"]);

app.controller("LayersSimpleController", [ '$scope', function($scope) {
    angular.extend($scope, {
        denver: {
            lat: 39.73915,
            lng: -104.9847,
            zoom: 6
        },
        layers: {
            baselayers: {
                osm: {
                    name: 'OpenStreetMap',
                    url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                    type: 'xyz'
                },
                precipitation: {
                    name: 'OpenWeatherMap - Precipitation',
                    url: 'http://{s}.tile.openweathermap.org/map/precipitation/{z}/{x}/{y}.png',
                    type: 'xyz'
                }
            }
        },
        defaults: {
            scrollWheelZoom: false
        }
    });
} ]);