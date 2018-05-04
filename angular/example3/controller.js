var app = angular.module("loginApp", []);
app.controller("validateCtrl", function($scope, $http) {
	$scope.user = "";
	$scope.pass = "";
	$scope.error = false;
	$scope.success = false;
	$scope.validate = function() {
		var dataObj = {
			user: $scope.user,
			pass: $scope.pass
		};
		$http.post("validate.php", dataObj)
		.then(function(data) {
			var response = data.data;
			if (response=="ok") {
				$scope.success = true;
				$scope.error = false;
			} else {
				$scope.success = false;
				$scope.error = true;
				$scope.pass = "";
			}
		});
	}
});
