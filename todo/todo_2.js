(function() {
  var app = angular.module('todoapp', []);

  app.controller('TodoController', function(){
    this.todos = [
      {text: 'Apply some js code.', done: false},
      {text: 'Have some food.', done: false}
    ];

    this.countries = [
      {id: '1', text: 'Pakistan'},
      {id: '2', text: 'China'},
      {id: '3', text: 'India'}
    ];
  });
})();