'use strict';

angular.module('profile')
    .controller('NavbarCtrl', function ($scope, $rootScope, $state, $window, $timeout) {
      $scope.menu = [

        {
          'title': 'Info',
          'state': 'info'
        },
        {
          'title': 'Admin',
          'state': 'admin'
        }

      ];

      $scope.isCollapsed = true;
     // $scope.isLoggedIn = Auth.isLoggedIn;
     // $scope.isAdmin = Auth.isAdmin;
     // $scope.currentUser = Auth.currentUser;
      //$scope.logOut = Auth.logOut;
     // $scope.logOut = function() {
     //   Auth.logOut();
     //   $state.go('info');
      //};






    });