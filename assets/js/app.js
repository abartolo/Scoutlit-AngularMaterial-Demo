

"use strict";
    
//MODULE
var angularMaterialDemo = angular.module('angularMaterialDemo', ['ngRoute', 'ngResource']);


//Routes
angularMaterialDemo.config(function ($routeProvider) {
    $routeProvider
        .when('/', {

            templateUrl: 'html/homepage.html',
            controller: 'homepageController'
        });
        /*.when('/forecast/', {

            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        })
        .when('/forecast/:days', {

            templateUrl: 'pages/forecast.html',
            controller: 'forecastController'
        });*/
});

