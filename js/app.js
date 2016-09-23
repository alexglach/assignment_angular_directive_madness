var app = angular.module("DirectiveMadness", []);

app.factory("_", ["$window",function($window) {
    return $window._;
}]);
