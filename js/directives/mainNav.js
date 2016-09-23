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

app.directive("colorize", [function(){

  function linkCB(scope, element, attributes) {
    if (attributes.originalEl) {
      element.children().first().css('background-color', scope.background);
      element.children().first().css('color', scope.color);
    } else {
      element.css('background-color', scope.background);
      element.css('color', scope.color);
    }
  }

  return {
    restrict: "A",
    link: linkCB,
    scope: {
      color: "@",
      background: "@"
    }
  };
}]);

app.directive("mouseBtn", [function(){
  function popDom(scope, element, attributes){
    $(document).mouseup(function(e){
      element.text("Mouse Button is: 'UP'");
    });

    $(document).mousedown(function(e){
      element.text("Mouse Button is: 'Down'");
    });
  }

  return {
    restrict: "E",
    link: popDom
  };

}]);

app.directive("mouseOver", [function(){
  function popDom(scope, element, attributes){
    $(element).mouseover(function(e){
      element.text('Hover state: "OVER"');
    });

    $(element).mouseleave(function(e){
      element.text('Hover state: "LEAVE"');
    });
  }

  return {
    restrict: "E",
    link: popDom
  };

}]);

app.directive("btnFreakinTime", [function(){
  function popDom(scope, element, attributes){
    $(element).dblclick(function(e){
      element.children().first().text("I'm totally double clickable");
    });

    $(element).click(function(e){
      element.children().first().text("I'm totally single clickable");
    });
  }

  return {
    template: "<button>OH YEAHHH</button>",
    restrict: "E",
    link: popDom
  };

}]);
