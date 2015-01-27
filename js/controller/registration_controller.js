'use strict';

GameApp.controller('RegistrationCtrl', ['$scope', '$state', "userService",
  function($scope, $state, userService) {
    $scope.user = {
      name:"",
      email: "",
      password: ""
    };

    $scope.signup = function(){
      var allUsers = userService.listUsers();
      var user = allUsers[$scope.user.email];
      if(user){
        $scope.showError("Email already exists.");
        return;
      }
      userService.createUser($scope.user);
      $state.go("login_path");
    };
  }
]);
