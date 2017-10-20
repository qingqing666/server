;
var app = angular.module("myApp",["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("server",{
            url: "/server",
            templateUrl: "./App/View/server.html",
            controller: "serverController"
        });
    $urlRouterProvider.otherwise("/server");
});