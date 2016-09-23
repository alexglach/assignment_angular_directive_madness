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
  }

  return {
    template: "<p class='text-center'>" + "<ng-transclude></ng-transclude>" +
              "</p>",
    restrict: "E",
    transclude: true,
    link: linkCB
  };
}]);
