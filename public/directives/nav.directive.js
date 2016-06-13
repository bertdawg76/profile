'use strict';

angular.module('profile')
    .directive('navbar', function () {
      return {
        templateUrl: 'views/md-toolbar.html',
        restrict: 'E',
        controller: 'NavbarCtrl'
      };
    });