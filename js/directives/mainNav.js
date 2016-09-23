app.directive("mainNav", [function(){
  return {
    templateUrl: "js/directives/_mainNav.html",
    restrict: "E"
    // scope: {}
  };
}]);

app.directive("copyright", [function(){
  function linkCB(scope, element, attributes){
    var text = element.children().first().text();
    text += " " + new Date().getFullYear();
    element.children().first().text(text);
    element.css('height', '50px');
    element.css('width', '100px')
  }

  return {
    template: "<p class='text-center'>" + "<ng-transclude></ng-transclude>" +
              "</p>",
    restrict: "E",
    transclude: true,
    link: linkCB
  };
}]);

app.directive("colorize", [function(){

  function linkCB(scope, element, attributes) {
    if (attributes.originalEl) {
      element.children().first().css('background-color', scope.background);
      element.children().first().css('color', scope.color)
    } else {
      element.css('background-color', scope.background);
      element.css('color', scope.color)
    }
  }

  return {
    restrict: "A",
    link: linkCB,
    scope: {
      color: "@",
      background: "@"
    }
  }



}]);
