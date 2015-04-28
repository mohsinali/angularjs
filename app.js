(function() {
  var app = angular.module('gemStore', []);
  var gem = {name: "Azure", price: "7.6"};
  var products = [
    {
      name: "Azure", 
      price: "7.6",
      soldOut: true
    },
    {
      name: "Shirts", 
      price: "9",
      soldOut: false
    }
  ]

  app.controller('StoreController', function(){
    this.products = products;
  });

  
})();


// Some services code
/*
app.controller('productsController', ['$http', function($http){
  $http.get('/store-products.html').success(function(data){

  });
}]);
*/