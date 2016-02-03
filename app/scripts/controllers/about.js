'use strict';

(function() {
/**
 * @ngdoc function
 * @name angularStarterApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularStarterApp
 */
var app = angular.module('angularStarterAboutApp', [])
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

})();
