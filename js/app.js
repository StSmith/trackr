'use strict';
if(typeof(Storage)!=="undefined")
  {
  	console.log('local storage ok');
  }
else
  {
  	alert('Get with the times.  Your browser does not support local storage, which is integral to this application');
  }

// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller: 'HomeCtrl'});
    $routeProvider.when('/settings', {templateUrl: 'partials/settings.html', controller: 'SettingsCtrl'});
    $routeProvider.when('/savings', {templateUrl: 'partials/savings.html', controller: 'SavingsCtrl'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
