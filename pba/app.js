(function() {
  var app = angular.module('pba', []);

  app.controller('TabsController', function(){
    this.tab = 1;

    this.isSet = function(checkTab){
      return this.tab === checkTab;
    };
  });
})();