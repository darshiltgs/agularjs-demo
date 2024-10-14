app.controller("LoginController", [
  "$scope",
  "$http",
  "$location",
  function ($scope, $http, $location) {
    $scope.submitForm = function (user) {
      console.log(user);
      $http.post("http://localhost:8000/api/v1/users/login", user).then(
        function (response) {
          console.log(response);
          localStorage.setItem("token", response.data.user.token);
          $location.path("/employee");
        },
        function (error) {
          console.log(error.message);
          alert("Login failed!");
        }
      );
    };
  },
]);

app.controller("SignupController", [
  "$scope",
  "$http",
  "$location",
  function ($scope, $http, $location) {
    $scope.submitForm = function (user) {
      $http.post("YOUR_API_URL/signup", user).then(
        function (response) {
          alert("Signup successful! You can now login.");
          $location.path("/");
        },
        function (error) {
          alert("Signup failed!");
        }
      );
    };
  },
]);

app.controller("EmployeesController", [
  "$scope",
  "$http",
  function ($scope, $http) {
    $scope.products = [];

    // Fetch products
    $scope.fetchProducts = function () {
      $http
        .get("http://localhost:8000/api/v1/employees", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(
          function (response) {
            console.log(response);
            $scope.products = response.data.employees;
          },
          function (error) {
            alert("Failed to load products!");
          }
        );
    };

    $scope.fetchProducts();

    // Delete a product
    $scope.deleteProduct = function (productId) {
      $http
        .delete("http://localhost:8000/api/v1/employees/" + productId, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then(
          function (response) {
            $scope.products = $scope.products.filter((p) => p.id !== productId);
            $scope.fetchProducts();
          },
          function (error) {
            alert("Failed to delete product!");
          }
        );
    };
  },
]);
