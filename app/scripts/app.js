'use strict';

/**
 * @ngdoc overview
 * @name mvpApp
 * @description
 * # mvpApp
 *
 * Main module of the application.
 */
angular
  .module('mvpApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMap',
    'mvpApp.map'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mapController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope, NgMap){
    NgMap.getMap().then(function(map){
      $rootScope.map = map;
    })
  })
  .factory('infoDisplay', function($rootScope){
    var displayMethods = {};
    displayMethods.windowDisplay = function(a, marker, context){
     context.currentMarker = marker;
     $rootScope.map.showInfoWindow('post-data');
     $('.tabber').click(function(e){
      e.preventDefault();
      $(this).tab('show');
     });
    }
    return displayMethods;
  });
