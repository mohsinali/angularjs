(function() {
  var app = angular.module('todoapp', []);

  app.controller('TodoController', function(){
    this.todos = [
      {text: 'Apply some js code.', done: false},
      {text: 'Have some food.', done: false},
      {text: 'Bring printed application', done: false}
    ];

    this.countries = [
      {id: '1', text: 'Pakistan'},
      {id: '2', text: 'China'},
      {id: '3', text: 'India'}
    ];

    this.remaining = function(){
      var count = 0;
      angular.forEach(this.todos, function(todo){
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    this.addTodo = function(){
      this.todos.push({text: this.todoText, done: false});
      this.todoText = '';
    };

    this.addCountry = function(){
      this.countries.push({id: 4, text: this.countryText});
      this.countryText = '';
    };
  });
})();