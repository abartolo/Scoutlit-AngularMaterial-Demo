//MODULE
var angularMaterialDemo = angular.module('angularMaterialDemo', ['ngMaterial', 'ngAnimate', 'ngRoute']);


//Routes
angularMaterialDemo.config(function ($routeProvider) {
    $routeProvider.
    when('/', {
        controller: 'homepageController'
    }).

    otherwise({
        redirectTo: '/'
    });
});
