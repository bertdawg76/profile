angular.module('profile', ['ui.router', 'ngMaterial', 'ngAnimate']);

angular.module('profile').config(function($urlRouterProvider, $stateProvider) {



  $urlRouterProvider.otherwise('/admin');
  $stateProvider


      .state('admin', {
        url:'/admin',
        templateUrl: 'views/admin.html',
        controller: 'adminCtrl',
        controllerAs: 'admin'
      })



});