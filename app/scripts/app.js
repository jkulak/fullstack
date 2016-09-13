'use strict';

/**
 * @ngdoc overview
 * @name fullstackApp
 * @description
 * # fullstackApp
 *
 * Main module of the application.
 */
angular
  .module('fullstackApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
