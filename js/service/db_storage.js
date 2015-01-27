GameApp.service('dbStore', ['$window',
  function ($window) {
    return {
      privateStorage: {},
      set: function(key, value) {
        if(this.isLocalStorage()) {
          $window.localStorage[key] = JSON.stringify(value);
        }
        else {
          this.privateStorage[key] = JSON.stringify(value);
        }
      },

      get: function(key) {
        var value;
        if(this.isLocalStorage()) {
          $window.localStorage[key] = $window.localStorage[key];
          value = $window.localStorage[key];
        }
        else {
          value = this.privateStorage[key];
        }
        if(value && value != "undefined")
          return JSON.parse(value);
        else
          return null;
      },
      
      clear: function() {
        if(this.isLocalStorage()) {
          return $window.localStorage.clear();
        }
        else {
          return this.privateStorage = {};
        }
      },

      removeKey: function(key){
        if(this.isLocalStorage()) {
          $window.localStorage.removeItem(key);
        }
        else {
          delete this.privateStorage[key];
        }
      },

      listKeys: function(){
        if(this.isLocalStorage()) {
          return Object.keys($window.localStorage);
        }
        else {
          return Object.keys(this.privateStorage);
        }
      },

      isLocalStorage: function(){
        var testKey = "test", storage = $window.localStorage;
        try {
          storage.setItem(testKey, 'test');
          storage.removeItem(testKey);
        }
        catch (error) {
          return false;
        }
        return true;
      }
    }
}]);