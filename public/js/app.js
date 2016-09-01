 var app = angular.module('LocalLan', ['ngRoute']) .config(function($routeProvider){
  $routeProvider
      .when('/', {
       templateUrl: '/templates/events.html'
      });
 });
