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
    $routeProvider.when('/overview', {templateUrl: 'partials/overview.html'});
    $routeProvider.when('/income', {templateUrl: 'partials/income.html', controller: 'IncomeCtrl'});
    $routeProvider.when('/expenses', {templateUrl: 'partials/expenses.html', controller: 'ExpensesCtrl'});
    $routeProvider.otherwise({redirectTo: '/home'});
  }]);
