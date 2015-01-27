'use strict';

GameApp.controller('ApplicationCtrl', ['$scope', '$rootScope', '$state', 'dbStore', 'authService',
  function($scope, $rootScope, $state, dbStore, authService) {
    $scope.initialize = function(){
      if(!dbStore.get('Users')){
        dbStore.set('Users', {});
      }
      if(!dbStore.get('Scores')){
        dbStore.set('Scores', {});
      }
      if(!dbStore.get('Questions')){
        dbStore.set('Questions', {});
      }
    }

    $scope.showError = function(error){
    	$rootScope.error = error;
    }

    $scope.currentUser = function(){
    	return authService.currentUser();
    }

    $scope.loggedIn = function(){
    	return authService.loggedIn();
    }

    $scope.logout = function(){
    	authService.logout();
    	$state.go("login_path");
    }
  }]);
