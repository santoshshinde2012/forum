angular.module('santoshApp.homeservices', [])
/**
**Service For the Car Locations
**Functions :
** 1.getGetTest
** 2.getPostTest
**/
.service('HomeTestService', function($q, $http) {
    return {
        getGetTest: function() {
            var deferred = $q.defer();
            var promise  = deferred.promise;

            $http({
                    method  : "GET",
                    url     : instance.api + "test"
                })
                .success(function(data, status) {
                    deferred.resolve(data);
                })
                .error(function(data, status) {
                    if (status == 409) {
                        deferred.resolve(data);
                    } else {
                        deferred.reject(data);
                    }
                });

            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }

            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }

            return promise;
        },
        getPostTest: function(data) {
            var deferred = $q.defer();
            var promise  = deferred.promise;
            var params = {
                data : "test"
            };
            //console.log(JSON.stringify(params));
            $http({
                    method: "POST",
                    url: instance.api + "test",
                    data: params,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                .success(function(data, status) {
                    deferred.resolve(data);
                })
                .error(function(data, status) {
                    deferred.reject(data);
                });

            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }

            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }

            return promise;
        }
      }
})
