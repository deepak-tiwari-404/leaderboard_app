'use strict';

GameApp.service('userService', ['dbStore', 'AppConstants',
  function(dbStore, AppConstants) {
    this.getSetting = function(userId){
      return dbStore.get("Settings")[userId] || AppConstants.defaultSetting;
    };

    this.listSettings = function(userId){
      return dbStore.get("Settings");
    };

    this.saveSetting = function(userId, setting){
      var allSetting = this.listSettings();
      allSetting[userId] = setting;
      dbStore.set("Settings", allSetting);
    };

    this.listUsers = function(){
      return dbStore.get('Users');
    }

    this.createUser = function(){
      var allUsers = this.listUsers();
      allUsers[$scope.user.email] = $scope.user;
      dbStore.set("Users", allUsers);
    }
  }]);