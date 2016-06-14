angular.module('profile', ['ui.router', 'ngMaterial', 'ngAnimate']);

angular.module('profile').config(function($urlRouterProvider, $stateProvider) {



  $urlRouterProvider.otherwise('/info');
  $stateProvider


      .state('admin', {
        url:'/admin',
        templateUrl: 'views/admin.html',
        controller: 'adminCtrl',
        controllerAs: 'admin'
      })
      .state('info', {
        url: '/info',
        templateUrl: 'views/info-view.html',
        controller: 'infoCtrl',
        controllerAs: 'display'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'vm'
      })

});