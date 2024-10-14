var app = angular.module("myApp", ["ngRoute"]);

app.config([
  "$routeProvider",
  function ($routeProvider) {
    $routeProvider
      // Define routes for different views
      .when("/", {
        templateUrl: "login.html",
        controller: "LoginController",
      })
      .when("/signup", {
        templateUrl: "signup.html",
        controller: "SignupController",
      })
      .when("/employee", {
        templateUrl: "employee.html",
        controller: "EmployeesController",
      })
      .otherwise({
        redirectTo: "/",
      });
  },
]);
