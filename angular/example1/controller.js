var app = angular.module("colorPicker", []);
app.controller("myCtrl", function($scope, hexConvert) {
	$scope.red = 0;
    $scope.green = 0;
    $scope.blue = 0;
    $scope.hexValue = function() {
        var rHex = hexConvert.convert($scope.red);
        var rVal = ($scope.red<16 ? "0"+rHex : rHex);
        var gHex = hexConvert.convert($scope.green);
        var gVal = ($scope.green<16 ? "0"+gHex : gHex);
        var bHex = hexConvert.convert($scope.blue);
        var bVal = ($scope.blue<16 ? "0"+bHex : bHex);
        return "#" + rVal + gVal + bVal;
    }
});
