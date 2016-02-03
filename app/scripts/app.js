'use strict';

(function() {
  /**
   * @ngdoc overview
   * @name angularStarterApp
   * @description
   * # angularStarterApp
   *
   * Main module of the application.
   */
  var app = angular.module('angularStarterApp', [
      'ngAnimate',
      'ngSanitize',
      'ngTouch',
      'ui.router',
      'angularSpinner',
      'mgcrea.ngStrap',
      'mainStarterApp',
      'angularStarterAboutApp'
    ])
    .config(function($stateProvider, $urlRouterProvider, $modalProvider) {
      $stateProvider
        .state('main', {
          url: '/',
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .state('about', {
          url: '/about',
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        });

      $urlRouterProvider.otherwise('/');

      angular.extend($modalProvider.defaults, {
        html: true
      });
    });
})();
