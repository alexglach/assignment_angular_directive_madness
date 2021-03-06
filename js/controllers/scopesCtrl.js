app.controller('ScopesCtrl',
  ['$scope', '$window', function($scope, $window){

  $scope.twoWay = "foo",
  $scope.oneWay = "bar",

  $scope.sayHello = function(name){
    $window.alert("Hello... " + name + " from isolated scope!");
  };

  }]
);

app.directive('isolated', [function() {

  function linkCB(scope, element, attributes){
    scope.twoWay = "New Two Way!!!";
    scope.oneWay = "New One Way!!!";
  }

  return {

    restrict: 'AE',
    templateUrl: '/js/directives/isolated.html',
    scope: {
      twoWay: "=",
      oneWay: "@",
      sayHello: "&"
    },
    link: linkCB
  }

  }]
);
