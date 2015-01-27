'use strict';

GameApp.controller('EditUserCtrl', ['$scope', '$state', 'userService',
  function($scope, $state, userService) {
  	$scope.setting = userService.getSetting($scope.currentUser().email);

    $scope.done = function(){
      userService.saveSetting($scope.currentUser().email, $scope.setting)
      $state.go("summary_path");
    }
  }
]);

GameApp.controller('UserIndexCtrl', ['$scope', '$state', 'userService',
  function($scope, $state, userService) {
    $scope.users = userService.listUsers();
  }
]);
