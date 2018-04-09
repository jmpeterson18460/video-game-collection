let videoGameApp = angular.module('VideoGameApp', ['ngRoute', 'ngMaterial']);

videoGameApp.config(function($routeProvider, $mdThemingProvider){
    console.log('Route config loaded');
    $mdThemingProvider.theme('dark-grey').backgroundPalette('grey').dark();

    $routeProvider
        .when('/videogame', {
            templateUrl: 'views/videogame.html',
            controller: 'VideoGameController as vm'
        })
        .when('/system', {
            templateUrl: 'views/system.html',
            controller: 'SystemController as vm'
        })
        // .otherwise( {redirectTo: '/ships'} );
    
})