app.controller('QuotesCtrl',
  ['$scope', function($scope){
    $scope.formData = {};
    $scope.quotes = [];
    $scope.bar = 

    $scope.processForm = function(newForm){
      $scope.formData.id = $scope.idCounter;

      // $scope.quotes.push($scope.formData);
      $scope.quotes.push($scope.formData);
      $scope.formData = {};
    };

    $scope.deleteQuote = function(quote){
      console.log(quote)
      $scope.quotes.splice($scope.quotes.indexOf(quote), 1);
    };
  }]
);

app.directive('quoteForm', [function(){
    function clearForm(scope, element, attributes){
      element.children("[type='text']").val("");
    }

    return {
      templateUrl: 'js/directives/_quoteForm.html',
      restrict: 'E',
      scope: true,
      link: clearForm
    };
  }]
);

app.directive('quoteRow', [function(){
    return {
      templateUrl: 'js/directives/_quote.html',
      restrict: 'A',
      scope: {
        quote: "=",
        delete: "&"
      }
    };
  }]
);
