var app = angular.module("myApp", []);
app.controller("myCtrl", function($scope) {
	$scope.homeClass="active";
	$scope.aboutClass="inactive";
	$scope.contactClass="inactive";
	$scope.update = function(name) {
		switch (name) {
			case "home":
				$scope.homeClass="active";
				$scope.aboutClass="inactive";
				$scope.contactClass="inactive";
				break;
			case "about":
				$scope.homeClass="inactive";
				$scope.aboutClass="active";
				$scope.contactClass="inactive";
				break;
			case "contact":
				$scope.homeClass="inactive";
				$scope.aboutClass="inactive";
				$scope.contactClass="active";
				break;
		}
	}
});
