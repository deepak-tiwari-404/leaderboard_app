// Define a new module. This time we declare a dependency on
// the ngRoute module
'use strict';

var GameApp = angular.module("GameApp", ['ui.router']);

GameApp.run(["$rootScope", "$state", "authService", function ($rootScope, $state, authService) {
  console.log("$stateChangeStart configured.");
  $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
    $rootScope.error = undefined;
    $rootScope.title = toState.title;
    console.log($rootScope.title);
    if(toState.loginRequired && !authService.loggedIn()){
    	event.preventDefault();
      $state.go("login_path");
    }
  });
}]);

