'use strict';
angular.module('<%= appNameShort %>.controllers')
  .controller('AppCtrl', function ($scope, $location, aFactory) {
    aFactory.getSomething().then(function(value) {
      //
    });
  });
