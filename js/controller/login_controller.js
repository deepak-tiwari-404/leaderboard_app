'use strict';

GameApp.controller('LoginCtrl', ['$scope', '$state', 'dbStore',
  function($scope, $state, dbStore) {
    initialize();

    $scope.login = function(){
      var allUsers = dbStore.get("Users");
      var user = allUsers[$scope.user.email];
      if(user === undefined){
        $scope.showError("Email doesn't exist. Please register then try login");
        return;
      }
      if(user.password != $scope.user.password){
        $scope.showError("Incorrect password");
        return;
      }
      dbStore.set("CurrentUser", $scope.user);
      $state.go("summary_path");
    };

    function initialize(){
      if($scope.loggedIn()){
        $state.go("summary_path");
        return;
      }
      $scope.user = {
        email: "",
        password: ""
      };
    }
  }
]);
