'use strict';

(function() {
  /**
   * @ngdoc function
   * @name mainStarterApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the mainStarterApp
   */
  var app = angular.module('mainStarterApp', [])
    .controller('MainCtrl', function($scope, $modal, $sce) {
      var that = this;

      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];

      $scope.modal = {
        title: 'Title',
        content: 'Hello Modal<br />This is a multiline message!'
      };

      var myModal = $modal({
        templateUrl: 'views/templates/modal.create.tpl.html',
        show: false
      });

      $scope.showModal = function() {
        myModal.$promise.then(myModal.show);
      };

      $scope.hideModal = function() {
        myModal.$promise.then(myModal.hide);
      };

    });
})();
