'use strict';

angular.module('profile')
    .directive('navbar', function () {
      return {
        templateUrl: 'views/nav.html',
        restrict: 'E',
        controller: 'NavbarCtrl'
      };
    });