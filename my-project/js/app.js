var MyController=function($scope){
  $scope.message='Hello World';
  $scope.action=function(){
    $scope.message='Good Bye!';
  };
};

var appModule=angular.module('app',[]);
appModule.controller('myController',MyController);