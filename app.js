(function() {
  var app = angular.module('gemStore', []);
  var gem = {name: "Azure", price: "7.6"};

  app.controller('StoreController', function(){
    this.product = gem;
  });

  
})();


// Some services code
/*
app.controller('productsController', ['$http', function($http){
  $http.get('/store-products.html').success(function(data){

  });
}]);
*/