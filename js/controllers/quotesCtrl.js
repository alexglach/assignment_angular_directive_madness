app.controller('QuotesCtrl',
  ['$scope', function($scope){

    $scope.quotes = [];

    $scope.processForm = function(){
      console.log("process form is called")
      console.log($scope.formData);
      $scope.quotes.push($scope.formData);
      $scope.formData = {};
    }


  }]
);

app.directive('quoteForm', [function(){


    return {
      templateUrl: 'js/directives/_quoteForm.html',
      restrict: 'E',
      scope: true
    }
  }]
)