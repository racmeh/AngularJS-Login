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

app.directive("datepicker", function() {
  return {
    template : "<label for='dtpick'>Date of Birth</label><br><input type='date' id='dtpick' ng-model='dob' required>"
  };
});

function formsub(){
alert('Submitted!');
}