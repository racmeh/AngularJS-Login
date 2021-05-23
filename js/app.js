var app = angular.module("mainpg", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "login.htm"
    })
    .when("/login", {
        templateUrl : "login.htm"
    })
    .when("/register", {
        templateUrl : "register.htm"
    });
});