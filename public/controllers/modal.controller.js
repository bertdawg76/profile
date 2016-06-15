angular.module('profile').controller('modalCtrl', function($uibModalInstance, $scope, oneProject){

  $scope.oneProject = oneProject;
  $scope.ok = function() {
    $uibModalInstance.close();
  }

});