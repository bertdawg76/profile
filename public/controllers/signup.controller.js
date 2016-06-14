'use strict';

angular.module('profile')
    .controller('SignupCtrl', function($location, Auth) {
      var vm = this;
      vm.pageHeader = {
        title: 'Create a new account'
      };

      vm.credentials = {
        name : "",
        email : "",
        password : ""
      };

      vm.returnPage = $location.search().page || '/';

      vm.onSubmit = function (){
        vm.formError = "";
        Auth.register(vm.credentials)
            .error(function(err){
              vm.formError = err;
            })
            .then(function(){
              $location.search('page', null);
              $location.path(vm.returnPage);
            });
      }

    });