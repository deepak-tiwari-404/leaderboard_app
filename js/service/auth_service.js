'use strict';

GameApp.service('authService', ['dbStore',
  function(dbStore) {
    this.currentUser = function(){
      return dbStore.get("CurrentUser");
    };

    this.loggedIn = function(){
      return !!this.currentUser();
    }

    this.logout = function(){
      dbStore.removeKey("CurrentUser");
    }
  }]);