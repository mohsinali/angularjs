(function() {
  var app = angular.module('pba', []);

  app.controller('TabsController', function(){
    this.tab = 1;

    this.isSet = function(checkTab){
      return this.tab === checkTab;
    };
  });

  app.controller('SelectController', function(){
    this.test = "Mohsin";
    var select_options = [
    {
      value: "Person Check",
      text: "Person Check"
    },
    {
      value: "Busines Check",
      text: "Busines Check"
    }
  ];
  });

  var select_options = [
    {
      value: "Person Check",
      text: "Person Check"
    },
    {
      value: "Busines Check",
      text: "Busines Check"
    }
  ];


})();