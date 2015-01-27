'use strict';

GameApp.controller('ApplicationCtrl', ['$scope', '$rootScope', '$state', 'dbStore', 'authService', 'AppConstants',
  function($scope, $rootScope, $state, dbStore, authService, AppConstants) {
    $scope.initialize = function(){
      dbStore.setDb();
      $scope.scoreRange = AppConstants.scoreRange;
      $scope.settingRange = AppConstants.settingRange;
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
