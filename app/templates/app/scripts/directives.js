'use strict';
angular.module('<%= appNameShort %>.directives')
  .directive('directive', function() {
    return {
      restrict: 'E'
      ,replace: true
      ,transclude: true
      ,templateUrl: 'partials/directive.html'
    };
  });
