angular.module('portfolio', [
    'ngRoute'
]).config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'portfolio/home.html',
            controller: function ($scope) {
            }
        });
});