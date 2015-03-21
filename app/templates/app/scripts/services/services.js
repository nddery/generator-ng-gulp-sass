'use strict';
angular.module('<%= appNameShort %>.services')
  .factory('<%= appNameShort %>Cache', function($cacheFactory) {
    return $cacheFactory('cache-name');
  })

  .factory('aFactory', function(config, $http, $q, <%= appNameShort %>Cache) {
    var getSomething = function(name) {
      var deferred = $q.defer();

      deferred.resolve('value');

      return deferred.promise;
    };

    return {
      getSomething: getSomething
    };
  });
