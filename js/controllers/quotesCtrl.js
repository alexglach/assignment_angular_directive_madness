app.controller('QuotesCtrl',
  ['$scope', function($scope){
    $scope.formData = {};
    $scope.quotes = [];

    $scope.processForm = function(formS){
      if(formS.$valid){
        console.log(formS.$valid);
        $scope.formData.editing = false;
        $scope.quotes.push($scope.formData);
        $scope.formData = {};
        formS.$setPristine();
      }
    };

    $scope.deleteQuote = function(quote){
      $scope.quotes.splice($scope.quotes.indexOf(quote), 1);
    };

    $scope.editQuote = function(quote){
      quote.editing = !quote.editing;
      if(quote.editing){
        quote.tempAuthor = quote.author;
        quote.tempQuote = quote.quote;
      } else {
        quote.author = quote.tempAuthor;
        quote.quote = quote.tempQuote;
      }
    };

    $scope.cancel = function(quote){
      quote.editing = !quote.editing;
    }
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
        delete: "&",
        edit: "&",
        cancel: "&"
      }
    };
  }]
);
