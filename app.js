(function(){
  var app = angular.module('store', []);

  app.controller('storeController', function(){
    this.products = gems;
  });

  var gems = [
  {
    name: 'Diandra',
    price: 2.95,
    description: '. .  .'
  },
  {
    name: 'Vikrant',
    price: 3.20,
    description: '* * *'
  },
  ]
})();
