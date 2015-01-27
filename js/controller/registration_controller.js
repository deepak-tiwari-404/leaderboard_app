'use strict';

GameApp.controller('RegistrationCtrl', ['$scope', '$state', "dbStore",
  function($scope, $state, dbStore) {
    $scope.user = {
    	name:"",
    	email: "",
    	password: ""
    };

    $scope.signup = function(){
      var allUsers = dbStore.get("Users");
      var user = allUsers[$scope.user.email];
      if(user){
      	$scope.showError("Email already exists.");
      	return;
      }
      allUsers[$scope.user.email] = $scope.user;
      dbStore.set("Users", allUsers);
      $state.go("login_path");
    };
  }
]);
