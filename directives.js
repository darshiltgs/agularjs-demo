app.directive("authForm", function () {
  return {
    restrict: "E",
    scope: {
      formType: "@",
      buttonText: "@",
      onSubmit: "&",
    },
    templateUrl: "auth-form.html",
    controller: [
      "$scope",
      function ($scope) {
        $scope.user = {};
        $scope.submitForm = function () {
          $scope.onSubmit({ user: $scope.user });
        };
      },
    ],
  };
});
