angular.module('profile', ['ui.router', 'ngMaterial', 'ngAnimate', 'ui.bootstrap', 'ngAria', 'ngMdIcons']);

angular.module('profile').config(function($urlRouterProvider, $stateProvider, $mdThemingProvider) {



    $mdThemingProvider.theme('default')
        .primaryPalette('green')
        .accentPalette('green')
        .warnPalette('red');





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
      .state('resume', {
        url: '/resume',
        templateUrl: 'views/resume.html'
      })

});