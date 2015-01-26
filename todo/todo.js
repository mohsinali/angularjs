function TodoCtrl($scope){
  $scope.totalTodos = 4;
  $scope.todos = [
    { text: 'Learn Angular', done: false}, 
    {text: 'Test Driven Development', done: false}
  ];

  $scope.addTodo = function(){
    $scope.todos.push({text: $scope.formTodoText, done: false});
  };
}