'use strict';

// Modules & Dependencies
angular.module('<%= appNameShort %>.services', []);
angular.module('<%= appNameShort %>.directives', ['<%= appNameShort %>.services']);
angular.module('<%= appNameShort %>.controllers', ['<%= appNameShort %>.services']);


angular.module('<%= appNameShort %>', [
    'ngAnimate',
    'ngCookies',
    'ngTouch',
    'ngSanitize',
    'ngRoute',
    '<%= appNameShort %>.services',
    '<%= appNameShort %>.directives',
    '<%= appNameShort %>.controllers'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        template: '',
        controller: 'AppCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
;
