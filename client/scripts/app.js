
angular
  .module('mvpApp', [
    'ngRoute',
    'mvpApp.map'
    ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'scripts/views/map.html',
        controller: 'mapController',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });
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
